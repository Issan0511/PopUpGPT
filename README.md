
## PopUpGPT

**PopUpGPT** は、選択したテキストをワンクリックで検索したり、検索ボックスから直接クエリを入力できる便利なChrome拡張機能です。この拡張機能では、検索が**一時チャット**として行われるため、**検索履歴に残りません**。

### 主な機能

- **テキスト選択後のワンクリック検索**  
  Webページ上のテキストを選択すると、選択範囲の近くにポップアップアイコンが表示され、それをクリックすると検索が実行されます。

- **検索ボックスからの直接入力**  
  拡張機能のアイコンをクリックすると検索ボックスが表示され、任意のクエリを入力して検索できます。

- **一時チャット検索**  
  検索はすべて一時チャットとして行われるため、**検索履歴に残りません**。プライバシーを重視するユーザーにも最適です。

### インストール方法

1. このリポジトリをクローンまたはダウンロードします:
   ```bash
   git clone https://github.com/<your-username>/PopUpGPT.git
   ```
   または、ZIPファイルをダウンロードして解凍します。

2. Chromeで `chrome://extensions/` を開きます。

3. 右上の「デベロッパーモード」を有効にします。

4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、ダウンロードまたはクローンしたフォルダを選択します。

### 使い方

1. **Webページ上のテキストを選択**します。
2. 選択範囲の近くに表示される **🔍 アイコンをクリック**します。
3. 新しいタブで選択したテキストに基づく検索結果が表示されます（一時チャットとして検索され、履歴に残りません）。

または、

1. **ブラウザのツールバーにあるPopUpGPTアイコンをクリック**します。
2. 表示される検索ボックスにクエリを入力し、検索ボタンを押します。
3. 新しいタブで入力したクエリの検索結果が表示されます。



### 開発者向け情報

- **言語**: JavaScript, HTML, CSS
- **Chrome拡張機能のバージョン**: Manifest V3


-