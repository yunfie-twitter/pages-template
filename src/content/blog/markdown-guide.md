---
title: "Markdown記法とKaTeX数式のサンプル"
date: "2026-05-15"
description: "ブログ記事内で使用できるMarkdown記法、コードハイライト、KaTeXによる数式表示のサンプルです。"
---

このテンプレートでは、標準的なMarkdown記法に加えて、KaTeXを用いた美しい数式表示をサポートしています。

## テキスト装飾とリスト

通常のテキストに加えて、**太字**、*イタリック*、~~打ち消し線~~ などの装飾が利用できます。

リストの例：

- リスト項目 1
- リスト項目 2
  - 入れ子のリスト項目 A
  - 入れ子のリスト項目 B
- リスト項目 3

番号付きリスト：

1. ステップ 1
2. ステップ 2
3. ステップ 3

## コードブロック

シンタックスハイライト付きのコードブロックを表示できます。

```typescript
// src/site.config.ts
export const siteConfig = {
  title: "My Portfolio",
  author: "Your Name",
};
```

## 数式の表示 (KaTeX)

インライン数式やブロック数式が利用できます。

インライン数式: $E = mc^2$ や $a^2 + b^2 = c^2$

ブロック数式:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
f(x) = \frac{1}{\sigma \sqrt{2\pi}} \exp\left( -\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^{\!2}\,\right)
$$

## 引用とリンク

> 継続は力なり。小さな積み重ねが大きな成果を生み出します。

詳細は [Astro公式ドキュメント](https://docs.astro.build/) をご覧ください。
