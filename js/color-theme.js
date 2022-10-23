const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  themeToggleDarkIcon.classList.remove('hidden');
  themeToggleDarkIcon.ariaHidden = "false"
  document.documentElement.classList.add('dark');
} else {
  themeToggleLightIcon.classList.remove('hidden');
  themeToggleLightIcon.ariaHidden = "false"
  document.documentElement.classList.remove('dark');
}

const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');

  themeToggleDarkIcon.ariaHidden = themeToggleDarkIcon.ariaHidden === "true" ? "false" : "true";
  themeToggleLightIcon.ariaHidden = themeToggleLightIcon.ariaHidden === "true" ? "false" : "true";

  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }

  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }

});