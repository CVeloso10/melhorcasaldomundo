let currentPage = 1;

function showPage(pageNumber) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.style.display = 'none');
  document.getElementById(`page${pageNumber}`).style.display = 'block';
  currentPage = pageNumber;
}

function changePage(offset) {
  const nextPage = currentPage + offset;
  const totalPages = document.querySelectorAll('.page').length;

  if (nextPage >= 1 && nextPage <= totalPages) {
    showPage(nextPage);
  }
}

// Exiba a primeira página ao carregar o site
showPage(1);
