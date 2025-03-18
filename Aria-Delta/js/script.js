/**
 * 
 * this is the main script file for the Aria-Delta theme 
 * Author: Hamza Nawabi 
 * Date: 2025-02-01
 * Version: 1.0
 * Link: https://cdn.jsdelivr.net/gh/Nawabi-Hamza/CDN/Aria-Delta/js/script.js
 * 
 */

// Loading page before load all pages
window.addEventListener("load", function () {
    // Hide the loading screen
    console.log(document.getElementById("loadingScreen").classList);
    document.getElementById("loadingScreen").classList.add("d-none");
});


document.getElementById("languageSelect").addEventListener("change", function() {
    let selectedOption = this.options[this.selectedIndex];
    this.style.color = selectedOption.style.color || "white"; // Set dropdown text color
  });


