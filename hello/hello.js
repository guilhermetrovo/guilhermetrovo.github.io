/**
 * Function executed when the hello page first loads.
 */
function onLoad() {
    // Get the browser's setting for light/dark theme
    var colorSchemeDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    var isDarkColorScheme = colorSchemeDarkQuery.matches;
    
    // Set the document with the browser's setting for light/dark theme so we can get/change later
    var currentColorScheme = isDarkColorScheme ? "dark" : "light";
    var newColorScheme = isDarkColorScheme ? "light" : "dark";
    document.body.style.colorScheme = currentColorScheme;
    
    var button = document.getElementById("themeBtn");

    // Change automatically when the user changes the setting in the browser
    colorSchemeDarkQuery.addEventListener('change', function(event) {
        swapColorScheme(button);
    });

    // Set the current button's look (to swap the theme)
    setButtonStyle(newColorScheme, button);
}

/**
 * Swap the theme colour the user is using.
 * @param {HTMLButtonElement} button The theme button so we can swap style as well.
 * @see onLoad
 */
function swapColorScheme(button) {
    // Get the current theme set in the document and swap it
    var currentColorScheme = document.body.style.colorScheme;
    var newColorScheme = currentColorScheme === "dark" ? "light" : "dark";
    document.body.style.colorScheme = newColorScheme;

    // Also swap the button's style
    if (button) {
        setButtonStyle(currentColorScheme, button);
    }
}

/**
 * Set the button's style to change the theme to 'light' or 'dark'
 * @param {String} scheme 'light' or 'dark'
 * @param {HTMLButtonElement} button The theme button
 */
function setButtonStyle(scheme, button) {
    if (scheme === "light") {
        button.title = "Set Light Theme";
        button.setAttribute("aria-label", "Set Light Theme");
        button.innerHTML = "💡";
    } else {
        button.title = "Set Dark Theme";
        button.setAttribute("aria-label", "Set Dark Theme");
        button.innerHTML = "🥷🏻";
    }
}
