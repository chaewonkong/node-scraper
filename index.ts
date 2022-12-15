import fastify from "fastify";
import axios from "axios";
import { Scrape } from "./scraping";

const server = fastify();

server.get("/ping", async (req, res) => {
  return "pong";
});

server.get("/test", async (req, res) => {
  try {
    const result = await axios.get(
      "https://leonkong.cc/14e9eb7b-add7-5809-a608-82fe32a37730",
      {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      }
    );
    const scrape = new Scrape(result.data);
    console.log(scrape.scrapeSiteMeta());
  } catch (e) {
    console.warn(e);
  }
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
