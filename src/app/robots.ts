import type { MetadataRoute } from 'next'

// agents list from https://robotstxt.com/ai
const agents = [
  "GPTBot",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "CCBot",
  "Google-Extended",
  "Applebot-Extended",
  "Facebookbot",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "diffbot",
  "PerplexityBot",
  "Perplexity-User",
  "Omgili",
  "Omgilibot",
  "webzio-extended",
  "ImagesiftBot",
  "Bytespider",
  "TikTokSpider",
  "Amazonbot",
  "Youbot",
  "SemrushBot-OCOB",
  "Petalbot",
  "VelenPublicWebCrawler",
  "TurnitinBot",
  "Timpibot",
  "OAI-SearchBot",
  "ICC-Crawler",
  "AI2Bot",
  "AI2Bot-Dolma",
  "DataForSeoBot",
  "AwarioBot",
  "AwarioSmartBot",
  "AwarioRssBot",
  "Google-CloudVertexBot",
  "PanguBot",
  "Kangaroo Bot",
  "Sentibot",
  "img2dataset",
  "Meltwater",
  "Seekr",
  "peer39_crawler",
  "cohere-ai",
  "cohere-training-data-crawler",
  "DuckAssistBot",
  "Scrapy",
  "Cotoyogi",
  "aiHitBot",
  "Factset_spyderbot",
  "FirecrawlAgent",
  "Googlebot-Image", // google images, not ai
  "Mediapartners-Google" // for ads but we don't serve ads
]

 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: agents,
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
      }
    ],
  }
}