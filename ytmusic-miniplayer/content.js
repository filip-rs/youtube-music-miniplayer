console.log("YouTube Music Miniplayer extension loaded!");

// Function to force the miniplayer
function forceMiniplayer() {
  const miniPlayerButton = document.querySelector('tp-yt-paper-icon-button[title="Åpne minispilleren"] tp-yt-iron-icon');

  if (miniPlayerButton) {
    const button = miniPlayerButton.closest('tp-yt-paper-icon-button');
    if (button) {
      button.click();
    }
  }
}

// Wait for the page to fully load and delay interaction
setTimeout(() => {
  forceMiniplayer();
}, 3000); // Wait 3 seconds to ensure elements are loaded

let lastMutationTime = 0;

// Set up MutationObserver to listen for song changes (DOM changes)
const observer = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList' || mutation.type === 'attributes') {
      const currentTime = Date.now();
      
      if (currentTime - lastMutationTime > 3000) { // Wait for 3 seconds between calls
        forceMiniplayer();
        lastMutationTime = currentTime;
      }
    }
  }
});

// Start observing the body or any other specific parent element for changes
const config = { childList: true, subtree: true, attributes: true };
observer.observe(document.body, config);
