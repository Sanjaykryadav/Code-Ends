


// Define outputArea
const outputArea = document.getElementById("output");

// Theme Switcher
const themeSwitcher = document.getElementById("theme-switcher");
themeSwitcher.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
});

// Save Code in Local Storage
codeMirror.on("change", () => {
    const code = codeMirror.getValue();
    localStorage.setItem("savedCode", code);
});

// Load Saved Code
window.addEventListener("load", () => {
    const savedCode = localStorage.getItem("savedCode");
    if (savedCode) {
        codeMirror.setValue(savedCode);
    }
});

const focusModeBtn = document.getElementById("focus-mode-btn");
const controlsDiv = document.getElementById("controls");
const controlsLeft = document.getElementById("controls-left");
const controlsRight = document.getElementById("controls-right");
const hederHide = document.getElementById("header-content");

focusModeBtn.addEventListener("click", () => {
    // Toggle fullscreen mode
    document.body.classList.toggle("fullscreen-mode");

    const isFullscreen = document.body.classList.contains("fullscreen-mode");

    // Update button icon and tooltip
    const icon = focusModeBtn.querySelector("i");
    if (isFullscreen) {
        icon.className = "fas fa-compress"; // Change to 'Exit Focus Mode' icon
        focusModeBtn.title = "Exit Focus Mode"; // Update hover text
        controlsDiv.style.width = "98%"; // Expand controls div to full width
        hederHide.style.display= "none";
    } else {
        icon.className = "fas fa-expand"; // Change back to 'Focus Mode' icon
        focusModeBtn.title = "Focus Mode"; // Reset hover text
        controlsDiv.style.width = ""; // Reset to default width
        hederHide.style.display="";
    }

    // Show all control buttons in focus mode
    Array.from(controlsRight.children).forEach(btn => {
        btn.style.display = isFullscreen ? "inline-block" : ""; // Restore default visibility
    });

    // Optionally, you can also style the controlsLeft section if needed
    controlsLeft.style.display = isFullscreen ? "block" : ""; // Ensure it's visible in fullscreen
});

// Undo Button
const undoBtn = document.getElementById("undo-btn");
undoBtn.addEventListener("click", () => {
    codeMirror.undo();
});


const downloadBtn = document.getElementById("download-btn");
downloadBtn.addEventListener("click", () => {
    const code = codeMirror.getValue();
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "code.c";
    a.click();
    URL.revokeObjectURL(url);
});

// Clear Output
document.getElementById("clear-output-btn").addEventListener("click", () => {
    outputArea.textContent = "";
});