import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getBlogPosts } from "../data/posts";
import { siteConfig } from "../site.config";
import { withBase } from "../utils/paths";

export async function GET(context: APIContext) {
  const posts = await getBlogPosts();
  const site = new URL(withBase("/"), context.site ?? siteConfig.siteUrl);

  return rss({
    title: `${siteConfig.siteName} Blog`,
    description: `${siteConfig.siteName}のブログ更新情報です。`,
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.date),
      link: withBase(`/blog/${post.id}/`),
    })),
  });
}
