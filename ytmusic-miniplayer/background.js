chrome.webNavigation.onCompleted.addListener(({ tabId, url }) => {
  if (url.includes("music.youtube.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["content.js"]
    });
  }
});
