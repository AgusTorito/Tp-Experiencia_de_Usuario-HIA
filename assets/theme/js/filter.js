// Filtro de categorías para Cartelera
// Requiere botones con data-filter y items con data-category

document.addEventListener('DOMContentLoaded', function () {
  const controls = document.querySelector('.filter-controls');
  if (!controls) return;

  const buttons = Array.from(controls.querySelectorAll('[data-filter]'));
  // Soporta galería y carrusel (Embla)
  function getItems() {
    return Array.from(document.querySelectorAll('.mbr-gallery .item, .embla__slide'));
  }

  function applyFilter(category) {
    const items = getItems();
    items.forEach((item) => {
      const itemCat = (item.getAttribute('data-category') || 'todos').toLowerCase();
      const show = category === 'todos' || itemCat === category;
      item.classList.toggle('hidden', !show);
    });
  }

  controls.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    buttons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.getAttribute('data-filter'));
  });

  // Estado inicial
  const initial = buttons.find((b) => b.classList.contains('active')) || buttons[0];
  if (initial) applyFilter(initial.getAttribute('data-filter'));
});


