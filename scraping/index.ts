/**
 * Scraper
 */
import * as cheerio from "cheerio";

export class Scrape {
  html: string;

  constructor(html: string) {
    this.html = html;
  }

  scrapeSiteMeta() {
    const $ = cheerio.load(this.html);
    const title = $("title").text();
    const description = $(`meta[property="description"]`).attr("content");
    const image = $(`meta[property="og:image"]`).attr("content");
    const keywords = $(`meta[property="keywords"]`).attr("content")?.split(",");
    return { title, description, image, keywords };
  }
}
