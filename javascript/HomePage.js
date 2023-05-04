const hamburger = document.getElementById('hamburger');
const dropdown = document.getElementById('dropdown');

hamburger.addEventListener('click', function() {
  dropdown.classList.toggle('active');
});
