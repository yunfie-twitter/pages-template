# Astro Portfolio & Blog Template

クリエイター・エンジニア・デザイナー向けの、モダンで高速なポートフォリオ＆ブログのテンプレートです。  
[Astro v6](https://astro.build/) をベースに構築されており、洗練されたアニメーションと高いカスタマイズ性を備えています。

---

## ✨ 特徴

- ⚡ **超高速＆軽量**: Astroのアイランドアーキテクチャによる高パフォーマンスな静的HTML出力
- 🛠 **一元管理の設定ファイル**: `src/site.config.ts` を編集するだけで、名前・SNS・自己紹介・GA4・SEO情報を一括設定
- 📜 **Markdown & KaTeX数式**: ブログ記事でMarkdown記法とKaTeXによる美しい数式レンダリングに対応
- 🌊 **心地よいスクロール体験**: [Lenis](https://github.com/darkroomengineering/lenis) による慣性スクロール
- 📱 **完全レスポンシブ**: スマートフォン、タブレット、デスクトップの全画面サイズに最適化
- 🔒 **プライバシー配慮**: GA4利用時のオプトイン対応Cookie同意バナー付き（GA4 ID未設定時は完全非表示）
- 📡 **SEO & RSS対応**: OGP・Twitter Cards、動的RSSフィード（`rss.xml`）、サイトマップ（`sitemap.xml`）自動生成

---

## 🚀 クイックスタート

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ローカル環境（デフォルト: `http://localhost:4321`）でプレビューが開きます。

### 3. プロダクションビルド

```bash
npm run build
```

ビルド成果物が `dist/` ディレクトリに生成されます。

```bash
npm run preview
```

生成された静的ファイルをローカルで確認できます。

---

## ⚙️ カスタマイズガイド

### 1. サイトの基本設定 (`src/site.config.ts`)

サイトのタイトル、著者名、自己紹介、メールアドレス、Google Analytics などを一元管理しています。まずはこのファイルを編集してください。

```typescript
// src/site.config.ts
export const siteConfig = {
  siteUrl: "https://example.com", // デプロイ先URL
  siteName: "My Portfolio",
  title: "My Portfolio | Official Website",
  description: "ポートフォリオサイトの説明文...",
  author: "Your Name",
  handle: "@username",
  avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=portfolio",

  // Google Analytics (不要な場合は空文字のままでOK)
  googleAnalyticsId: "", // "G-XXXXXXXXXX"

  // ヒーローセクション / About / 連絡先 / フッター設定...
};
```

### 2. SNS・活動リンクの編集 (`src/data/links.ts`)

Twitter (X)、GitHub、YouTube、note などのリンクを追加・編集できます。[Simple Icons](https://simpleicons.org/) のSVGアイコンやカスタムアクセントカラーが設定可能です。

### 3. GitHubリポジトリの表示 (`src/data/repositories.ts`)

トップページの「REPOSITORY」セクションに掲載するリポジトリを指定できます。

### 4. 音楽・動画トラックの編集 (`src/data/tracks.ts`)

YouTubeの動画IDを指定するだけで、「MUSIC」セクションにカード形式で表示されます。

> [!TIP]
> **未記入セクションの自動非表示機能**  
> 掲載する情報がないセクションは、データを空（または空文字）に設定するだけで、セクション本体およびヘッダー・フッターのメニューから**自動的に非表示**になります。
> - `MUSIC` (`src/data/tracks.ts`): 配列を `export const tracks: Track[] = [];` にすると非表示
> - `REPOSITORY` (`src/data/repositories.ts`): 配列を `export const repositories: RepositoryLink[] = [];` にすると非表示
> - `NEWS`: ブログ記事が0件の場合、トップページのNEWSセクションとメニューが非表示
> - `LINKS` (`src/data/links.ts`): 配列を空にすると非表示
> - `CONTACT` (`src/site.config.ts`): `contact.email: ""` にするとお問い合わせフォームが非表示

### 5. ブログ記事の追加 (`src/content/blog/`)

`src/content/blog/` ディレクトリに `.md` ファイルを追加するだけで、自動的に記事一覧と詳細ページが生成されます。

```markdown
---
title: "記事のタイトル"
date: "2026-06-01"
description: "記事の概要文..."
thumbnail: "https://example.com/image.jpg" # 省略可
---

ここから本文を記述します。KaTeX数式（$E = mc^2$）も利用可能です。
```

---

## 📁 ディレクトリ構成

```text
├── src/
│   ├── components/         # Astroコンポーネント（Header, Footer, Hero, Sectionsなど）
│   ├── content/
│   │   └── blog/           # ブログ記事Markdownファイル
│   ├── data/               # リンク、リポジトリ、トラック等のデータ
│   ├── pages/              # ルーティング（/, /blog, /privacy-policy, /404, /rss.xml）
│   ├── scripts/            # クライアントスクリプト（Lenis, Cookie, スムーズスクロール）
│   ├── styles/             # CSSスタイルシート
│   ├── utils/              # パス解決ユーティリティ
│   ├── site.config.ts      # サイト全体の設定ファイル ★
│   └── content.config.ts   # Astro Content Collections定義
├── astro.config.mjs        # Astro設定ファイル
└── package.json
```

---

## 🚢 デプロイ

### GitHub Pages
1. GitHubリポジトリを作成し、コードをプッシュします。
2. `.github/workflows/deploy.yml` 等でAstroのGitHub Pages用ワークフローを設定するか、リポジトリ設定の「Pages」からビルドソースを選択します。
3. `astro.config.mjs` の `site` と `base`（リポジトリ名）を必要に応じて調整してください。

### Vercel / Cloudflare Pages / Netlify
各ホスティングサービスにリポジトリを連携するだけで、自動で Astro プロジェクトとして認識されデプロイが完了します。

---

## 📄 ライセンス

MIT License
