# Vue.js で猫 GIF ガチャを作ってみよう

## 課題

後述する仕様の通りに動作するように `index.html` および `app.js` を編集しましょう。

穴埋めになっているので、以下の箇所にコードを足してください。

- `Insert code here...`
- `Insert gif component here...`

CSS は出来ているので変更しません。

## 仕様

- 「遊ぶ」ボタンをクリックすると、ランダムに選ばれた猫の GIF 画像が表示されます。
- すでに表示されている GIF 画像は消えてから新しい画像が表示されます。
- GIF 画像取得 API（`/api/gacha`）は以下の形式の JSON を返却します。

```json
{
  "url": "画像のURL"
}
```

## キーワード

`axios` を利用します。VanillaJS 編で紹介した [Promise](https://github.com/bis-study-group/vanillajs-gacha#promise) の説明がここでもヒントになるでしょう。

## 提出方法

`solution/{your name}` のルールでブランチを作成してください。

```console
$ git clone git@github.com:bis-study-group/vuejs-gacha.git
$ git checkout -b solution/name
```

解き終わったらリモートリポジトリにプッシュしてください。

```console
$ git push origin solution/name
```
