// loading
document.addEventListener('DOMContentLoaded', function () {
  var loadingOverlay = document.querySelector('.loading-overlay');
  setTimeout(function() {
    loadingOverlay.style.display = 'none';
  }, 1000);
});
// themeToggle
document.addEventListener('DOMContentLoaded', function() {
  var themeToggle = document.getElementById('themeToggle');
  var body = document.body;

  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
  });
});
