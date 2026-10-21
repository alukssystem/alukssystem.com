# ALUKS System Windows & Doors — website

A responsive, static website for `alukssystem.com`.

## Included
- Responsive landing page
- WhatsApp contact links for +91 98479 87173
- Product gallery placeholders (replace with your own installation photos)
- Online quotation request form that composes a WhatsApp message
- Google Maps link supplied by the owner
- No server/database required

## Preview locally
Open `index.html` in a browser. Internet is needed for the Google Fonts stylesheet, but the site works without it.

## Free publishing with Cloudflare Pages
1. Create/sign in to a Cloudflare account.
2. Create a GitHub repository and upload the contents of this folder (not the ZIP itself).
3. In Cloudflare, go to **Workers & Pages → Create → Pages → Connect to Git**.
4. Choose the repository. Framework preset: **None**. Build command: leave blank. Build output directory: `/` (or the repository root, depending on the screen).
5. Deploy and test the generated `pages.dev` URL.
6. In the Pages project, open **Custom domains → Set up a custom domain**, enter `alukssystem.com`, and follow the exact DNS instructions Cloudflare shows.
7. If your domain is registered elsewhere, add the DNS records shown by Cloudflare at the registrar's DNS page. Do not delete existing email-related MX/TXT records. If Cloudflare asks to change nameservers, understand that this affects DNS management for the domain; keep or recreate any email records before switching.
8. Repeat the custom-domain setup for `www.alukssystem.com` if desired, and set one as the preferred domain with a redirect.

## Add real product photos
Create/use images and put them in `images/`, then replace the placeholder `<div class="product-image ...">` blocks in `index.html` with `<img src="images/your-photo.jpg" alt="...">` and style them with `object-fit: cover; width: 100%; height: 100%`.
The large hero block can likewise be replaced with an `<img>`.

## Important
- This form does not store enquiries on a server; it opens WhatsApp with the enquiry filled in. The customer still needs to press **Send**.
- Cloudflare Pages hosting can be free. Your already-purchased domain renewal, paid email, and optional services may cost extra.
- Google Maps link is the one supplied by the owner; confirm it points to the intended business location before publishing.
