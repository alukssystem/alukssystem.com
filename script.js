const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('[data-product]').forEach(link => link.addEventListener('click', () => {
  const select = document.querySelector('#productSelect');
  if (select) select.value = link.dataset.product;
}));
document.querySelector('#quoteForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const lines = [
    'Hello ALUKS System Windows & Doors, I would like a quotation.',
    '',
    'Name: ' + (form.get('name') || ''),
    'Phone: ' + (form.get('phone') || ''),
    'Product: ' + (form.get('product') || ''),
    'Approx. size / quantity: ' + (form.get('size') || 'Not specified'),
    'Project location: ' + (form.get('location') || 'Not specified'),
    'Requirements: ' + (form.get('message') || 'Not specified')
  ];
  window.open('https://wa.me/919847987173?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener,noreferrer');
});
document.querySelector('#year').textContent = new Date().getFullYear();
