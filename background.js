chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "myContextMenu",
        title: "Perform action on %s",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "myContextMenu") {
        const selectedText = info.selectionText;
        console.log("selectedText:", selectedText);

        chrome.tabs.create({ url: `https://www.google.com/search?q=${encodeURIComponent(selectedText)}` });
    }
})


