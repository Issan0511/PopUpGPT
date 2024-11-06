chrome.runtime.onInstalled.addListener(() => {
    // 「SearchGPTで『選択テキスト』を検索」メニュー
    chrome.contextMenus.create({
      id: "searchGPT",
      title: 'Search "%s" in SearchGPT',
      contexts: ["selection"]
    });
    
    // // 「SearchGPTで『選択テキスト』とは何か聞く」メニュー
    // chrome.contextMenus.create({
    //   id: "askWhatIs",
    //   title: 'SearchGPTで「%s」とは何か聞く',
    //   contexts: ["selection"]
    // });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    const query = info.selectionText;
    
    if (info.menuItemId === "searchGPT" && query) {
      const url = `https://chatgpt.com/?q=${encodeURIComponent(query)}&hints=search&ref=ext&temporary-chat=true`;
      chrome.tabs.create({ url: url });
    }
    
    if (info.menuItemId === "askWhatIs" && query) {
      const questionUrl = `https://chatgpt.com/?q=${encodeURIComponent(query)}+とは何かについて分かりやすく簡潔に教えて下さい&hints=search&ref=ext&temporary-chat=true`;
      chrome.tabs.create({ url: questionUrl });
    }
  });
  