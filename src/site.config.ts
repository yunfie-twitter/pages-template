export interface SiteConfig {
  siteUrl: string;
  siteName: string;
  title: string;
  description: string;
  author: string;
  handle: string;
  avatar: string;
  locale: string;

  // SEO & SNS
  ogImage: string;
  twitterHandle: string;

  // Analytics & Verification (空文字で無効化)
  googleAnalyticsId: string;
  googleSiteVerification: string;

  // Hero Section
  hero: {
    kicker: string;
    title: string;
    copy: string;
    primaryBtnText: string;
    primaryBtnHref: string;
    secondaryBtnText: string;
    secondaryBtnHref: string;
  };

  // About Section
  about: {
    kicker: string;
    title: string;
    lead: string;
    bio: string;
    tags: string[];
  };

  // Contact Section
  contact: {
    email: string;
    description: string;
  };

  // Footer Section
  footer: {
    tagline: string;
    copyrightYear: number;
  };
}

export const siteConfig: SiteConfig = {
  // サイト基本URL（デプロイ先URLに合わせて変更してください）
  siteUrl: "https://example.com",
  siteName: "My Portfolio",
  title: "My Portfolio | Official Website",
  description:
    "Web・ソフトウェア・デザインなどの制作物やブログ記事をまとめたポートフォリオサイトです。",
  author: "Your Name",
  handle: "@username",
  avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=portfolio",
  locale: "ja_JP",

  // OGP & Twitter
  ogImage: "/ogp.png",
  twitterHandle: "@username",

  // Google Analytics & Search Console (利用しない場合は空文字のままでOK)
  googleAnalyticsId: "", // 例: "G-XXXXXXXXXX"
  googleSiteVerification: "", // 例: "your-verification-code"

  // ヒーローセクション
  hero: {
    kicker: "Official Website",
    title: "@username",
    copy: "調べて、作って、公開する。日々の制作や思考の断片を、静かに置いていく場所。",
    primaryBtnText: "About",
    primaryBtnHref: "#about",
    secondaryBtnText: "Links",
    secondaryBtnHref: "#links"
  },

  // Aboutセクション
  about: {
    kicker: "Personal Creator",
    title: "ABOUT",
    lead: "はじめまして、Your Nameです。Web制作やソフトウェア開発、デザインなど気になったテーマを探求・制作しています。",
    bio: "このサイトは、各種SNSや投稿先、制作実績、ブログ記事をまとめておくためのポートフォリオです。興味の向くままに制作・発信を続けています。",
    tags: ["Web", "Software", "Design"]
  },

  // コンタクトセクション
  contact: {
    email: "hello@example.com",
    description: "お問い合わせやご連絡は、こちらのメールフォームまたは上記アドレスからお気軽にどうぞ。"
  },

  // フッター
  footer: {
    tagline: "Personal archive of web, notes, and tiny experiments.",
    copyrightYear: 2026
  }
};
