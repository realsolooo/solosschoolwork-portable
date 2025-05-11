//change the theme based on the button clicked
function switchTheme(theme) {
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-frogie', 'theme-szvy');
    document.body.classList.add(theme);

    // Save the theme to localStorage
    localStorage.setItem('theme', theme);
}

// Check localStorage for saved theme preference and apply it
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        // Default to light theme
        document.body.classList.add('theme-light');
    }
});
