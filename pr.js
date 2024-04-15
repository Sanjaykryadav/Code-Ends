function run(){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let outPut = document.getElementById("Output");

    outPut.contentDocument.body.innerHTML = htmlCode +"<style>"+cssCode+"</style>";
    outPut.contentWindow.eval(jsCode);

}

/*-----===toggler style switcher====*/
//function toggleFullscreen() {
    // Your existing code for toggling fullscreen
    // ...

    // For example, you might want to log a message when fullscreen is toggled
    //console.log("Fullscreen toggled!");
//}

// Add other JavaScript functions as needed

// Mobile navigation toggle
function toggleMobileNavbar() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
}

// Theme 

let isDarkTheme = false;

function toggleTheme() {
const container = document.querySelector('.body');

// Toggle the class based on the current theme
if (isDarkTheme) {
container.classList.remove('dark-theme');
} else {
container.classList.add('dark-theme');
}


// Toggle the flag
isDarkTheme = !isDarkTheme;

}

// Download Code

function downloadCode() {
const htmlCode = document.getElementById("html-code").value;
const cssCode = document.getElementById("css-code").value;
const jsCode = document.getElementById("js-code").value;

// Create a Blob for each code type
const htmlBlob = new Blob([htmlCode], { type: 'text/html' });
const cssBlob = new Blob([cssCode], { type: 'text/css' });
const jsBlob = new Blob([jsCode], { type: 'text/javascript' });

// Create download links for each code type
const htmlLink = document.createElement('a');
htmlLink.href = URL.createObjectURL(htmlBlob);
htmlLink.download = 'index.html';

const cssLink = document.createElement('a');
cssLink.href = URL.createObjectURL(cssBlob);
cssLink.download = 'styles.css';

const jsLink = document.createElement('a');
jsLink.href = URL.createObjectURL(jsBlob);
jsLink.download = 'script.js';

// Append the links to the document and trigger a click to start the download
document.body.appendChild(htmlLink);
document.body.appendChild(cssLink);
document.body.appendChild(jsLink);

htmlLink.click();
cssLink.click();
jsLink.click();

// Remove the links from the document
document.body.removeChild(htmlLink);
document.body.removeChild(cssLink);
document.body.removeChild(jsLink);
}

// FullScreen Mode 

function toggleFullscreen() {
const editorContainer = document.querySelector('.Output');

// Check if fullscreen mode is currently active
const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement;

if (!isFullscreen) {
// Enter fullscreen mode
if (editorContainer.requestFullscreen) {
editorContainer.requestFullscreen();
} else if (editorContainer.webkitRequestFullscreen) {
editorContainer.webkitRequestFullscreen();
}
} else {
// Exit fullscreen mode
if (document.exitFullscreen) {
document.exitFullscreen();
} else if (document.webkitExitFullscreen) {
document.webkitExitFullscreen();
}
}
}
//code mirror //
