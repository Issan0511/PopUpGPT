document.addEventListener("DOMContentLoaded", async function () {
  const searchButton = document.getElementById("searchButton");
  const queryInput = document.getElementById("query");

  // アクティブタブの選択テキストを取得
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => window.getSelection().toString()
    });

    const selectedText = results[0]?.result;
    if (selectedText && selectedText.trim()) {
      queryInput.value = selectedText.trim();
    }
  } catch (error) {
    console.error("選択テキストの取得に失敗しました:", error);
  }

  // 検索ボタンをクリックしたとき
  searchButton.addEventListener("click", function () {
    const query = queryInput.value.trim();
    if (query) {
      const url = `https://chatgpt.com/?q=${encodeURIComponent(query)}&hints=search&ref=ext&temporary-chat=true`;
      chrome.tabs.create({ url: url });
    } else {
      alert("検索クエリを入力してください。");
    }
  });

  // Enter キーでも検索できるように
  queryInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchButton.click();
    }
  });
});
