
function toggleTheme() {
    const htmlElement = document.documentElement
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light'); // Switch to light theme
      } else {
        htmlElement.setAttribute('data-theme', 'dark'); // Switch to dark theme
      }
}
