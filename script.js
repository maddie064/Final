window.onload = function () {
  const courseName = "GameWatch Central";
  alert("Welcome to " + courseName + "! Enjoy exploring our gaming suggestions!");
};
// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
if (toggle) {
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
    localStorage.setItem('darkMode', toggle.checked);
  });

  // Load previous preference
  const saved = localStorage.getItem('darkMode') === 'true';
  toggle.checked = saved;
  if (saved) {
    document.body.classList.add('dark-mode');
  }
}
