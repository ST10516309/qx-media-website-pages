# QX Media Website

A responsive, multi-page website for QX Media (Pty) Ltd, a South African digital marketing agency. The site presents the agency's services, introduces its founders, and helps visitors make service enquiries or contact either office.

**Live website:** Add the published URL here after deployment.  
**Part 3 repository:** [wede5020-2026-part-3-st10516309](https://github.com/EMGPSD/wede5020-2026-part-3-st10516309)

---

## Student Information

| | |
|---|---|
| **Developer** | Siphile Lisahluma Ogiya-Onke Mbanga |
| **Student number** | ST10516309 |
| **Module** | Web Development (Introduction) — WEDE5020 |
| **Organisation** | QX Media (Pty) Ltd |

---

## Project Overview

The website gives small businesses, e-commerce brands, and corporate teams information about QX Media's digital marketing services. Its main goals are to build trust, explain the available packages, and help prospective clients send a relevant enquiry.

The site is built with HTML, CSS, and JavaScript. It does not use a database or a server-side API.

## Pages

- **Home** (`/`) — introduction, service highlights, results, and company overview.
- **About Us** (`/about/`) — company background, founder profiles, and mission and vision.
- **Services** (`/services/`) — five services, package information, and service search.
- **Enquire** (`/enquire/`) — a form for service and budget enquiries.
- **Contact** (`/contact/`) — Johannesburg and Cape Town office details, maps, and a general contact form.
- **Not Found** (`/404.html`) — branded guidance and links for visitors who open an unknown URL.

## Site Map

```text
Home (/)
├── About Us (/about/)
├── Services (/services/)
├── Enquire (/enquire/)
└── Contact (/contact/)
```

The XML sitemap for search engines is in [`sitemap.xml`](sitemap.xml) and lists these five public page URLs.

## Features

- Responsive layouts for desktop, tablet, and mobile screens.
- Branded 404 page with links back to the home page and services.
- QX Media monogram favicon in the browser tab.
- Service search that filters service cards and reports the number of matching results.
- Founder portraits that open in a dialog lightbox.
- Embedded maps for the Johannesburg and Cape Town offices.
- Client-side validation and accessible feedback for the enquiry and contact forms.
- Enquiry form response that summarizes the selected service and guide prices.
- Email links that prepare an enquiry or contact message in the visitor's email application.
- Homepage statistics that count up when they enter the viewport. The animation respects the visitor's reduced-motion setting.

### Form behavior

The forms do not send data to a server. After validation, the site creates a `mailto:` link with the entered details. The visitor must open the link in an email application and send the message. No form data is stored by this website.

## Technology

- **HTML5** for page structure and content.
- **CSS3** for the visual design, responsive layouts, and interactive states.
- **JavaScript** for service search, the founder lightbox, form validation and responses, and animated statistics.
- **Google Fonts** for the Inter and Poppins typefaces.
- **Google Maps** for the office map embeds.
- **Git and GitHub** for version control.
- **GitHub Pages** for assessment hosting, if enabled for the repository.

## Run Locally

Serve the project root with a local static web server such as the Visual Studio Code Live Server extension. The route folders (`about/`, `services/`, `enquire/`, and `contact/`) sit beside the shared `css`, `images`, and `js` folders.

## Browser Checks

The following interactions were checked in a browser:

- Search for a service and confirm non-matching cards are hidden.
- Open and close each founder portrait lightbox.
- Confirm both office maps display.
- Submit each form empty and confirm validation feedback appears.
- Complete each form and confirm the email link is created.
- Scroll to the homepage Results section and confirm the statistics count up.

JavaScript syntax was also checked with `node --check js/app.js`.

## Folder Structure

```text
QX_Media/
├── 404.html
├── about/
│   └── index.html
├── contact/
│   └── index.html
├── enquire/
│   └── index.html
├── favicon.svg
├── index.html
├── robots.txt
├── services/
│   └── index.html
├── README.md
├── sitemap.xml
├── css/
│   └── main.css
├── images/
│   └── website images and logo files
└── js/
    └── app.js
```

## Changelog

### Part 1 — Project Initiation and Planning

- Created the project repository and the `css`, `js`, and `images` folders.
- Selected QX Media as the organisation and completed the website proposal.
- Created the sitemap and built the five main HTML pages with shared navigation.
- Added initial content about the company, services, founders, and contact details.

### Part 2 — CSS and Responsive Design

- Built the site's visual system with reusable CSS variables, typography, spacing, cards, and form styles.
- Added responsive layouts for desktop, tablet, and mobile screen sizes.
- Added hover, active, and keyboard-visible focus states for interactive elements.
- Kept images responsive and adapted multi-column sections for smaller screens.

### Part 3 — JavaScript Functionality

- Added an SVG favicon for browser tabs.
- Added page-specific search titles and descriptions.
- Added `sitemap.xml` and `robots.txt` for the public domain.
- Moved the About, Services, Enquire, and Contact pages to clean folder URLs.
- Added live search and result counts to the Services page.
- Added a dialog lightbox for founder portraits.
- Embedded maps for both office locations.
- Added client-side validation, accessible feedback, service and package summaries, and email links for both forms.
- Added animated counters to the homepage Results section, with reduced-motion support.
- Added a branded `404.html` page for unknown URLs.

## References

### Course lecture notes

Sookha, J. (n.d.). *WEDE2026 Introduction to Web Development lecture notes*. GitHub. Available at: [WEDE2026 course notes repository](https://github.com/jesselsookha/WEDE2026/tree/main/docs) (Accessed: 7 November 2026).

The following lesson notes from the repository informed the project:

**Website planning and HTML**

- [01 — Why Websites Matter](https://github.com/jesselsookha/WEDE2026/blob/main/docs/01_why-websites-matter.md)
- [02 — What Makes a Successful Website](https://github.com/jesselsookha/WEDE2026/blob/main/docs/02_what-makes-a-successful-website.md)
- [03 — Website Strategy and Measurement](https://github.com/jesselsookha/WEDE2026/blob/main/docs/03_website-strategy-and-measurement.md)
- [04 — File Structure and VS Code](https://github.com/jesselsookha/WEDE2026/blob/main/docs/04_file-structure-vscode.md)
- [05 — HTML Basics](https://github.com/jesselsookha/WEDE2026/blob/main/docs/05_html_basics.md)
- [06 — HTML Content](https://github.com/jesselsookha/WEDE2026/blob/main/docs/06_html_content.md)
- [07 — HTML Tables and Forms](https://github.com/jesselsookha/WEDE2026/blob/main/docs/07_html_tables_forms.md)
- [08 — HTML Best Practices](https://github.com/jesselsookha/WEDE2026/blob/main/docs/08_html_best_practices.md)
- [09 — HTML Anatomy](https://github.com/jesselsookha/WEDE2026/blob/main/docs/09_html_anatomy.md)
- [10 — HTML Social Media](https://github.com/jesselsookha/WEDE2026/blob/main/docs/10_html_social.md)

**CSS and responsive design**

- [11 — CSS Introduction](https://github.com/jesselsookha/WEDE2026/blob/main/docs/11_css_intro.md)
- [12 — CSS Syntax and Selectors](https://github.com/jesselsookha/WEDE2026/blob/main/docs/12_css_syntax_selectors.md)
- [13 — CSS Box Model](https://github.com/jesselsookha/WEDE2026/blob/main/docs/13_css_box_model.md)
- [14 — CSS Typography and Colour](https://github.com/jesselsookha/WEDE2026/blob/main/docs/14_css_typography_color.md)
- [15 — CSS Flexbox](https://github.com/jesselsookha/WEDE2026/blob/main/docs/15_css_flexbox.md)
- [16 — CSS Grid](https://github.com/jesselsookha/WEDE2026/blob/main/docs/16_css_grid.md)
- [17 — CSS Animations](https://github.com/jesselsookha/WEDE2026/blob/main/docs/17_css_animations.md)
- [18 — CSS Best Practices](https://github.com/jesselsookha/WEDE2026/blob/main/docs/18_css_best_practices.md)
- [19 — Responsive Web Design Introduction](https://github.com/jesselsookha/WEDE2026/blob/main/docs/19_rwd_intro.md)
- [20 — Responsive Media Queries](https://github.com/jesselsookha/WEDE2026/blob/main/docs/20_rwd_media_queries.md)
- [21 — Mobile-First Responsive Design](https://github.com/jesselsookha/WEDE2026/blob/main/docs/21_rwd_mobile_first.md)
- [22 — Responsive Images and Navigation](https://github.com/jesselsookha/WEDE2026/blob/main/docs/22_rwd_images_nav.md)
- [23 — Responsive Frameworks and Testing](https://github.com/jesselsookha/WEDE2026/blob/main/docs/23_rwd_frameworks_testing.md)
- [24 — Responsive Design Checklist and Project](https://github.com/jesselsookha/WEDE2026/blob/main/docs/24_rwd_checklist_project.md)

**JavaScript, SEO, and publishing**

- [25 — JavaScript Introduction](https://github.com/jesselsookha/WEDE2026/blob/main/docs/25_js_intro.md)
- [26 — JavaScript Syntax](https://github.com/jesselsookha/WEDE2026/blob/main/docs/26_js_syntax.md)
- [27 — JavaScript Functions and Conditionals](https://github.com/jesselsookha/WEDE2026/blob/main/docs/27_js_functions_conditionals.md)
- [28 — JavaScript Loops and Arrays](https://github.com/jesselsookha/WEDE2026/blob/main/docs/28_js_loops_arrays.md)
- [29 — JavaScript DOM](https://github.com/jesselsookha/WEDE2026/blob/main/docs/29_js_dom.md)
- [30 — JavaScript Events](https://github.com/jesselsookha/WEDE2026/blob/main/docs/30_js_events.md)
- [31 — JavaScript Form Validation](https://github.com/jesselsookha/WEDE2026/blob/main/docs/31_js_form_validation.md)
- [32 — JavaScript Project Sprint](https://github.com/jesselsookha/WEDE2026/blob/main/docs/32_js_project_sprint.md)
- [33 — JavaScript Libraries and APIs](https://github.com/jesselsookha/WEDE2026/blob/main/docs/33_js_libraries_apis.md)
- [34 — JavaScript Asynchronous APIs](https://github.com/jesselsookha/WEDE2026/blob/main/docs/34_js_async_apis.md)
- [35 — JavaScript Capstone](https://github.com/jesselsookha/WEDE2026/blob/main/docs/35_js_capstone.md)
- [36 — SEO Fundamentals](https://github.com/jesselsookha/WEDE2026/blob/main/docs/36_seo_fundamentals.md)
- [37 — SEO for Developers](https://github.com/jesselsookha/WEDE2026/blob/main/docs/37_seo_developers.md)
- [38 — Publishing Workflow](https://github.com/jesselsookha/WEDE2026/blob/main/docs/38_publishing_workflow.md)
- [39 — FTP Deployment](https://github.com/jesselsookha/WEDE2026/blob/main/docs/39_ftp_deployment.md)
- [40 — Analytics and Measurement](https://github.com/jesselsookha/WEDE2026/blob/main/docs/40_analytics_measurement.md)
- [41 — Final Project Launch Checklist](https://github.com/jesselsookha/WEDE2026/blob/main/docs/41_launch_checklist_final_project.md)

**Additional course resource**

- [X — Boilerplates](https://github.com/jesselsookha/WEDE2026/blob/main/docs/x_boilerplates.md)

### Technical references

- Google Fonts. *Inter* and *Poppins*. https://fonts.google.com/
- Google Maps Platform. *Maps Embed API*. https://developers.google.com/maps/documentation/embed/embedding-map
- GitHub Docs. *GitHub Pages*. https://docs.github.com/en/pages

Business and competitor research sources are documented in the QX Media website proposal.

- Apache Software Foundation. (n.d.). *mod_dir: DirectoryIndex*. Apache HTTP Server Version 2.4 Documentation. https://httpd.apache.org/docs/2.4/mod/mod_dir.html (Accessed: 8 November 2026).

