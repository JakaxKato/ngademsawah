const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Buka menu navigasi');
  siteNav.classList.remove('is-open');
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Buka menu navigasi' : 'Tutup menu navigasi');
  siteNav.classList.toggle('is-open', !isOpen);
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const posterDetails = {
  classic: {
    title: 'Classic',
    source: 'assets/listharga_classic.jpg',
    description: 'Poster harga dan fasilitas kamar Classic',
  },
  estetik12: {
    title: 'Estetik 1 & 2',
    source: 'assets/listharga_estetik_1&2.jpg',
    description: 'Poster harga dan fasilitas kabin Estetik 1 dan Estetik 2',
  },
  estetik3: {
    title: 'Estetik 3',
    source: 'assets/listharga_estetik_3.jpg',
    description: 'Poster harga dan fasilitas kabin Estetik 3',
  },
};

const posterDialog = document.querySelector('#poster-dialog');
const posterTitle = document.querySelector('#poster-dialog-title');
const posterImage = document.querySelector('#poster-dialog-image');

document.querySelectorAll('[data-poster]').forEach((button) => {
  button.addEventListener('click', () => {
    const details = posterDetails[button.dataset.poster];
    if (!details) return;

    posterTitle.textContent = details.title;
    posterImage.src = details.source;
    posterImage.alt = details.description;
    posterDialog.showModal();
  });
});

document.querySelector('#close-poster').addEventListener('click', () => posterDialog.close());

posterDialog.addEventListener('click', (event) => {
  const rect = posterDialog.getBoundingClientRect();
  const clickedOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;
  if (clickedOutside) posterDialog.close();
});

document.querySelector('#year').textContent = String(new Date().getFullYear());
