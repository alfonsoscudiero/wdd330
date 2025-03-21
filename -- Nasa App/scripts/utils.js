document.addEventListener('DOMContentLoaded', () => {
  const copyrightYr = document.getElementById('current-year');
  const pageLastModified = document.getElementById('date-modified'); 

  if (copyrightYr && pageLastModified) {
    const date = new Date();
    const currentYear = date.getFullYear();
    const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${currentYear}`;

    copyrightYr.textContent = currentYear;
    pageLastModified.textContent = formattedDate;
  }
});

// Search Bar Functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

  searchForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent the default form submission

      const searchTerm = searchInput.value.trim(); // Get the search term and trim whitespace

      if (searchTerm) {
          window.location.href = `https://www.nasa.gov/?search=${encodeURIComponent(searchTerm)}`;
      }
  });
});
