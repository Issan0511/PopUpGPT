console.log("content.js loaded");

// アイコン用の `div` 要素を生成
let button = document.createElement("div");
button.textContent = "🔍"; // 表示する絵文字
button.style.position = "absolute"; // 相対位置に変更
button.style.width = "24px";
button.style.height = "24px";
button.style.fontSize = "24px"; // 絵文字サイズを調整
button.style.display = "none"; // 初期状態では非表示
button.style.cursor = "pointer";
button.style.zIndex = "1000";
document.body.appendChild(button);

// テキスト選択時に絵文字を表示
document.addEventListener("mouseup", () => {
  const selection = window.getSelection().toString().trim();
  
  if (selection) {
    console.log("Selected text:", selection);
    
    const range = window.getSelection().getRangeAt(0);
    const rect = range.getBoundingClientRect();

    // 絵文字の表示位置を設定（相対位置）
    button.style.top = `${window.scrollY + rect.top - 30}px`; // 上に少しオフセット
    button.style.left = `${window.scrollX + rect.left}px`;
    button.style.display = "block"; // 絵文字を表示

    // 絵文字のクリックイベントを設定
    button.onclick = () => {
      console.log("Button clicked with selection:", selection);
      const url = `https://chatgpt.com/?q=${encodeURIComponent(selection)}&hints=search&ref=ext&temporary-chat=true`;
      window.open(url, "_blank");
    };
  } else {
    button.style.display = "none"; // テキストが選択されていない場合は非表示
  }
});

// 絵文字をクリックした時以外のクリックで絵文字を非表示
document.addEventListener("mousedown", (event) => {
  if (event.target !== button) {
    button.style.display = "none"; // 他の場所をクリックすると絵文字を非表示に
  }
});
