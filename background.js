// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Check if the message is to start capturing button clicks
  if (message.action === "startCapturingButtonClick") {
    // Let the content script know to start capturing button clicks
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "captureButtonClick"});
    });
  }
  // If you want to handle the button click ID, you can do it here
  else if (message.action === "buttonClicked") {
    // Log or process the button ID
    console.log("Button ID clicked:", message.buttonID);
chrome.storage.local.set({'btn': message.buttonID});
  }
});