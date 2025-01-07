chrome.runtime.onInstalled.addListener(() => {
  console.log("PopUpGPT installed");

  chrome.contextMenus.create({
    id: "searchGPT",
    title: 'Search "%s" in SearchGPT',
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const query = info.selectionText;

  if (info.menuItemId === "searchGPT" && query) {
    const url = `https://chatgpt.com/?q=${encodeURIComponent(query)}&hints=search&ref=ext&temporary-chat=true`;
    chrome.tabs.create({ url: url });
  }
});

// ショートカットキーのリスナーを追加
chrome.commands.onCommand.addListener((command) => {
  console.log(`Command received: ${command}`);

  if (command === "open-chatgpt") {
    const url = "https://chatgpt.com/";
    chrome.tabs.create({ url: url });
    console.log(`Navigating to ${url}`);
  }
});
