document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("searchButton").addEventListener("click", function () {
    const query = document.getElementById("query").value;
    if (query) {
      const url = `https://chatgpt.com/?q=${encodeURIComponent(query)}&hints=search&ref=ext&temporary-chat=true`;
      chrome.tabs.create({ url: url });
    } else {
      alert("検索クエリを入力してください。");
    }
  });
});
