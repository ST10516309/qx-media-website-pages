(() => {
  const serviceDetails = {
    'ad-management': { name: 'Social Media Ad Development & Management', starter: 4500, growth: 9000, unit: 'per month' },
    'content-creation': { name: 'Content Creation', starter: 3500, growth: 7000, unit: 'per month' },
    'community-management': { name: 'Community Management', starter: 2800, growth: 5500, unit: 'per month' },
    'analytics-reporting': { name: 'Analytics & Reporting', starter: 2000, growth: 4000, unit: 'per month' },
    'content-strategy': { name: 'Content Strategy', starter: 6000, growth: 12000, unit: 'once-off' },
  };

 const formatRand = (value) => `R${value.toLocaleString('en-ZA')}`;

  function validate(form, status) {
    let firstInvalid = null;
    const fields = [...form.querySelectorAll('input, select, textarea')];

    fields.forEach((field) => {
      field.setCustomValidity('');
      if (field.required && !field.value.trim()) {
        field.setCustomValidity('Please complete this field.');
      }
      if (!field.validity.valid && !firstInvalid) firstInvalid = field;
      if (field.required) field.setAttribute('aria-invalid', String(!field.validity.valid));
    });

    if (firstInvalid) {
      status.textContent = firstInvalid.validationMessage || 'Please check your answers.';
      status.hidden = false;
      firstInvalid.focus();
      firstInvalid.reportValidity();
      return false;
    }

    status.hidden = true;
    status.textContent = '';
    return true;
  }

  function clearFieldError(form, status) {
    form.addEventListener('input', (event) => {
      if (event.target.matches('input, select, textarea')) {
        event.target.setCustomValidity('');
        event.target.removeAttribute('aria-invalid');
        status.hidden = true;
      }
    });
    form.addEventListener('change', (event) => {
      if (event.target.matches('select')) {
        event.target.setCustomValidity('');
        event.target.removeAttribute('aria-invalid');
        status.hidden = true;
      }
    });
  }

  function emailLink(to, subject, body, label) {
    const link = document.createElement('a');
    link.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    link.textContent = label;
    return link;
  }

    const search = document.querySelector('#serviceSearch');
  if (search) {
    const cards = [...document.querySelectorAll('.service-detail')];
    const count = document.querySelector('#serviceSearchStatus');
    search.addEventListener('input', () => {
      const query = search.value.trim().toLocaleLowerCase();
      let visible = 0;
      cards.forEach((card) => {
        const matches = card.textContent.toLocaleLowerCase().includes(query);
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      count.textContent = query
        ? `${visible} ${visible === 1 ? 'service' : 'services'} found.`
        : `Showing all ${cards.length} services.`;
    });
  }

  const dialog = document.querySelector('#founderLightbox');
  const enlargedImage = document.querySelector('#lightboxImage');
  if (dialog && enlargedImage) {
    document.querySelectorAll('.gallery-trigger').forEach((button) => {
      button.addEventListener('click', () => {
        enlargedImage.src = button.dataset.galleryImage;
        enlargedImage.alt = button.dataset.galleryAlt;
        dialog.showModal();
      });
    });
    dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
      enlargedImage.removeAttribute('src');
      enlargedImage.alt = '';
    });
  }

  const enquiry = document.querySelector('#enquiryForm');
  if (enquiry) {
    const status = document.querySelector('#enquiryStatus');
    const response = document.querySelector('#enquiryResponse');
    clearFieldError(enquiry, status);
    enquiry.addEventListener('submit', (event) => {
      event.preventDefault();
      response.replaceChildren();
      response.hidden = true;
      if (!validate(enquiry, status)) return;

      const values = new FormData(enquiry);
      const service = serviceDetails[values.get('serviceInterest')];
      const summary = document.createElement('p');
      if (service) {
        summary.textContent = `${service.name}: Starter ${formatRand(service.starter)} and Growth ${formatRand(service.growth)} ${service.unit}. These are guide prices; final scope and availability will be confirmed by QX Media.`;
      } else {
        summary.textContent = 'We will review your requirements and recommend a suitable service and package.';
      }

      const body = [
        `Name: ${values.get('fullName')}`,
        `Email: ${values.get('email')}`,
        `Business: ${values.get('businessName')}`,
        `Business type: ${values.get('enquiryType')}`,
        `Service: ${service ? service.name : 'Not sure yet'}`,
        `Estimated monthly budget: ${values.get('budgetRange') || 'Not provided'}`,
        `Requirements: ${values.get('message')}`,
      ].join('\n');

      response.append(summary, emailLink('jhb@qxmedia.co.za', 'QX Media service enquiry', body, 'Open email to send this enquiry'));
      response.hidden = false;
      response.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  const contact = document.querySelector('#contactForm');
  if (contact) {
    const status = document.querySelector('#contactStatus');
    const response = document.querySelector('#contactResponse');
    clearFieldError(contact, status);
    contact.addEventListener('submit', (event) => {
      event.preventDefault();
      response.replaceChildren();
      response.hidden = true;
      if (!validate(contact, status)) return;

      const values = new FormData(contact);
      const body = [
        `Name: ${values.get('contactName')}`,
        `Email: ${values.get('contactEmail')}`,
        `Message type: ${values.get('messageType')}`,
        '',
        String(values.get('contactMessage')),
      ].join('\n');
      const note = document.createElement('p');
      note.textContent = 'Your message is ready in an email addressed to QX Media. Open the email below and press Send in your mail app.';
      response.append(note, emailLink('jhb@qxmedia.co.za', 'QX Media general message', body, 'Open email to send message'));
      response.hidden = false;
      response.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
})();
