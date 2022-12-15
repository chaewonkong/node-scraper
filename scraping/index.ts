/**
 * Scraper
 */
import * as cheerio from "cheerio";

class Scrape {
  html: string;

  constructor(html: string) {
    this.html = html;
  }

  scrapeSiteMeta() {
    const $ = cheerio.load(this.html);
    const title = $("title");
    const metatags = $("meta");

    return { title, metatags };
  }
}
