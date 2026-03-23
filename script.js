// ==============================
// MENANDAI HALAMAN YANG AKTIF
// ==============================

const navLinks = document.querySelectorAll('.nav-menu a');
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});


// ==============================
// SMOOTH SCROLL UNTUK LINK ANCHOR
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
