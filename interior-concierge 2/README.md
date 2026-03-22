# インテリアコンシェルジュ LP

高級家具の出張買取サービス「インテリアコンシェルジュ」のランディングページ。

---

## プロジェクト概要

- **サービス名**: インテリアコンシェルジュ（Interior Concierge）
- **サービス内容**: 高級ブランド家具の出張買取
- **ターゲット**: 高級マンション住まい・引越し予定の方
- **トーン**: 親しみやすい・信頼感・上質感

---

## 現在の状態（引き継ぎ時点）

### ✅ 完成しているもの
- ナビゲーション（PC・スマホ両対応）
- ヒーローセクション（左：コピー＋CTA、右：写真エリア）
- ブランドマーキー（横スクロールアニメーション）
- 実績3指標（買取件数・無料・翌日対応）
- 3ステップセクション
- フッターCTA
- レスポンシブ対応（768px以下でスマホレイアウト）

### ❌ 未完成・要対応
- [ ] 実際の家具写真の差し込み（現在はグレーのプレースホルダー）
- [ ] 問い合わせ・査定フォームの実装
- [ ] LINE連携ボタン
- [ ] 買取実績ギャラリーセクション
- [ ] よくある質問（FAQ）セクション
- [ ] 対応ブランド一覧ページ
- [ ] OGP・メタタグの設定
- [ ] Google Analytics / GTMの設置
- [ ] フォーム送信後のサンクスページ

---

## デザイントークン

```css
--cream:  #F7F3EC  /* 背景メイン */
--white:  #FFFFFF  /* カード・ナビ背景 */
--dark:   #1E1B17  /* テキスト・ボタン */
--mid:    #6B6560  /* サブテキスト */
--accent: #A0522D  /* アクセントカラー（ブラウン） */
--border: #E3DDD5  /* ボーダー */
```

### フォント
- 見出し: `Cormorant Garamond`（Google Fonts）
- 本文: `Noto Sans JP`（Google Fonts）

---

## ファイル構成

```
interior-concierge/
├── index.html          # メインLP（現在すべてここに集約）
├── css/
│   └── style.css       # 分離予定のスタイル
├── js/
│   └── main.js         # 分離予定のスクリプト
├── images/
│   ├── hero.jpg        # ヒーロー写真（要差し込み）
│   ├── case-01.jpg     # 買取事例写真（要差し込み）
│   └── brands/         # ブランドロゴ画像（要差し込み）
├── components/
│   └── form.html       # 査定フォーム（未作成）
└── README.md
```

---

## 対応ブランド一覧（マーキーに表示中）

Cassina / B&B Italia / arflex / ACTUS / ligne roset /
BoConcept / ercol / カリモク60 / TRUCK FURNITURE /
louis poulsen / GETAMA / Pacific Furniture Service

---

## 優先度の高い次のタスク

1. **写真の差し込み** — ヒーローの右エリア（.photo-placeholder）に実写真を入れる
2. **査定フォームの実装** — 名前・電話番号・家具ブランド・メッセージ・送信ボタン
3. **LINEボタン** — ヒーローのCTAにLINE公式アカウントへのリンクを追加
4. **FAQ追加** — よくある質問セクションをステップの下に追加
5. **デプロイ** — Vercel or Netlifyへの静的サイトデプロイ推奨

---

## デプロイ方法（推奨）

静的HTMLなのでVercelが最も簡単。

```bash
# Vercel CLI
npm i -g vercel
vercel deploy
```

または GitHub連携で自動デプロイ可能。

---

## 注意事項

- フォームのバックエンドは未実装。Formspree or Netlify Formsを使うのが最速。
- 画像は `/images/` 以下に配置し、index.htmlの `.photo-placeholder` を `<img>` タグに差し替える。
- 補助金申請との絡みで、AIツール（査定自動化・CRM）は別リポジトリで管理予定。
