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

// ボタンがクリックされたときに非表示を抑制するフラグ
let isButtonClick = false;

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
  }
});



button.addEventListener("mousedown", (e) => {
  e.stopPropagation(); // 他のイベントへの伝播を防止
  const selection = window.getSelection().toString().trim();
  if (selection) {
    const url = `https://chatgpt.com/?q=${encodeURIComponent(selection)}&hints=search&ref=ext&temporary-chat=true`;
    window.open(url, "_blank");
  }
  button.style.display = "none"; // クリック後にボタンを非表示に
  isButtonClick = false; // クリック後にリセット
});

// 選択解除時にボタンを非表示にする
document.addEventListener("selectionchange", () => {
  if (!isButtonClick && !window.getSelection().toString().trim()) {
    button.style.display = "none"; // 選択解除時にボタンを非表示
  }
});

// 他の場所をクリックしたときの処理
document.addEventListener("mousedown", (event) => {
  if (event.target !== button) {
    button.style.display = "none"; // 他の場所をクリックすると絵文字を非表示に
  }
});
