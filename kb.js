// Service worker for Manifest V3
browser.webNavigation.onCompleted.addListener(function (details) {
    browser.tabs.sendMessage(details.tabId, JSON.stringify({"directive":"insertKeyboard"}))
        .catch(error => console.error("Error sending message to content script:", error));
});