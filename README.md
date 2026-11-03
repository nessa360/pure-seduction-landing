# Pure Seduction Registration Landing Page

A polished, responsive registration landing page for a Pure Seduction fragrance collection. The design is inspired by the supplied product photography and promotional flyer, with a pink editorial visual style, fragrance-focused messaging, and a clear registration call to action.

## Live repository

Source code and assets are available at:

**[github.com/nessa360/pure-seduction-landing](https://github.com/nessa360/pure-seduction-landing)**

## Overview

This project is a lightweight static website built with HTML, CSS, and vanilla JavaScript. It does not require a framework, build tool, package manager, or external runtime.

The page is designed to:

- Introduce the Pure Seduction fragrance collection
- Present the product range using supplied product photography
- Encourage visitors to register their interest
- Communicate local contact information for customers in Accra, Ghana
- Provide a polished experience across desktop, tablet, and mobile screen sizes

## Features

### Hero section

The hero section introduces the collection with:

- “Feel fresh. Feel irresistible.” headline messaging
- Victoria’s Secret fragrance collection label
- Primary “Register your interest” call to action
- Social-proof style registration message
- Supplied Pure Seduction collection image featuring the fragrance mist, lotion, and refreshing gel body wash

### Collection highlights

The collection section presents three concise product and experience highlights:

- Pure Seduction signature scent
- Fragrance mist
- Body care

### Registration section

The registration section includes:

- A secondary call to action
- Full name field
- Email address field
- Optional phone number field
- Accra, Ghana contact details
- Client-side success state after form submission

### Responsive layout

The layout adapts to smaller screens using CSS media queries. On mobile devices:

- Navigation is simplified
- Hero content stacks vertically
- Product imagery scales to the available width
- Feature cards stack into a single column
- The registration form becomes full width
- Footer content stacks vertically

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts:
  - DM Sans
  - Playfair Display

No npm installation or build step is required.

## Project structure

```text
pure-seduction-landing/
├── index.html
├── styles.css
├── script.js
├── README.md
├── pure-seduction-collection.png
├── pure-seduction-flyer.png
├── pure-seduction-mist.png
└── pure-seduction-lotion.png
```

### `index.html`

Contains the page structure, navigation, hero content, product collection highlights, registration form, and footer.

### `styles.css`

Contains:

- Color variables
- Typography
- Hero gradients and layout
- Product image presentation
- Buttons and form styling
- Responsive breakpoints
- Mobile layout adjustments

### `script.js`

Provides the registration form interaction. When the form is submitted:

1. The browser prevents a full page reload.
2. The submit button changes to a confirmation state.
3. A success message appears.
4. The form fields are cleared.

### Image assets

- `pure-seduction-collection.png` — primary hero image showing the full product collection
- `pure-seduction-flyer.png` — supplied promotional flyer retained as a project asset
- `pure-seduction-mist.png` — supporting fragrance mist product image
- `pure-seduction-lotion.png` — supporting fragrance lotion product image

## Running locally

### Option 1: Open directly

Double-click `index.html` to open the page in a browser.

### Option 2: Use a local static server

A local server is recommended for a browser-like production environment.

Using Python:

```bash
python -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

Using Node.js and `npx`:

```bash
npx serve .
```

The site can also be served by any static hosting tool or local development server.

## Publishing with GitHub Pages

Because this is a static website, it can be deployed through GitHub Pages.

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Select **Pages** in the left navigation.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `master` branch and the root folder `/`.
6. Click **Save**.
7. Wait for GitHub to publish the site.

GitHub will provide a public URL similar to:

```text
https://nessa360.github.io/pure-seduction-landing/
```

If GitHub Pages is configured to use a different branch, update the branch selection accordingly.

## Deploying with Netlify

The project can also be deployed with Netlify:

1. Sign in at [netlify.com](https://www.netlify.com/).
2. Choose **Add new site**.
3. Select **Deploy manually**.
4. Drag the project folder into the upload area.
5. Netlify will provide a public URL.

For continuous deployment, connect the GitHub repository to Netlify and configure:

- Build command: none
- Publish directory: `.`

## Registration form limitation

The form is connected to Formspree using the endpoint configured in `index.html`. Successful submissions are sent to the connected Formspree account, and the page displays a confirmation state. Failed requests display an error state and allow the visitor to retry.

Before using the form for a public campaign, verify the Formspree dashboard settings, notification email, spam controls, submission limits, and privacy requirements.

### Form endpoint

The current endpoint is:

```text
https://formspree.io/f/mdeeprrl
```

To replace it, update the `action` attribute on the registration form in `index.html`.

### Production considerations

- Confirm the notification recipient in Formspree.
- Add a privacy policy and explicit consent language where required.
- Configure spam protection and submission limits.
- Add server-side or provider-side validation for any new fields.
- Avoid placing private API keys or secrets in this static repository.

## Customization

### Update contact details

Edit the phone number and location in `index.html`:

```html
+233 54 123 4567
Accra, Ghana
```

### Update registration messaging

The main headline, supporting copy, and button labels are all located in `index.html`.

### Update colors

The main palette is defined at the top of `styles.css`:

```css
:root {
  --ink: #35122c;
  --plum: #6a0d4c;
  --berry: #bd0d69;
  --pink: #f7a9cd;
  --blush: #fff3f8;
}
```

### Replace product imagery

Replace the image files while keeping the same filenames, or update the `src` path in `index.html`:

```html
<img
  src="pure-seduction-collection.png"
  alt="Victoria's Secret Pure Seduction fragrance mist, lotion, and refreshing gel body wash"
/>
```

Use descriptive alt text whenever product imagery is replaced.

## Accessibility

The page includes:

- Semantic sections and headings
- Descriptive image alt text
- Form labels associated with their inputs
- Keyboard-accessible links, fields, and buttons
- Responsive text and layout sizing
- A status message for successful form interaction

For production use, consider adding:

- More explicit error messages for invalid fields
- Visible focus styling across all interactive elements
- Server-side validation feedback
- A privacy policy and consent checkbox
- Reduced-motion support for users who prefer less animation

## Browser support

The site uses standard HTML, CSS, and JavaScript features supported by current versions of:

- Chrome
- Edge
- Firefox
- Safari

## Git workflow

To update the site after making changes:

```bash
git add .
git commit -m "Describe your change"
git push origin master
```

To check the current repository state:

```bash
git status
```

## License and brand note

This project was created for the supplied design materials and demonstration purposes. Victoria’s Secret and Pure Seduction are trademarks of their respective owner. Confirm that you have the appropriate rights and permissions before using branded assets, product photography, logos, or promotional copy in a public or commercial deployment.
