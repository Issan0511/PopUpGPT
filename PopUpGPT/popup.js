document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");
  const queryInput = document.getElementById("query");

  searchButton.addEventListener("click", function () {
    const query = queryInput.value;
    if (query) {
      const url = `https://chatgpt.com/?q=${encodeURIComponent(query)}&hints=search&ref=ext&temporary-chat=true`;
      chrome.tabs.create({ url: url });
    } else {
      alert("検索クエリを入力してください。");
    }
  });

  queryInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchButton.click();
    }
  });
});
