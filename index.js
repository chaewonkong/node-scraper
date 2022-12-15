"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const axios_1 = __importDefault(require("axios"));
const scraping_1 = require("./scraping");
const server = (0, fastify_1.default)();
server.get("/ping", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return "pong";
}));
server.get("/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios_1.default.get("https://leonkong.cc/14e9eb7b-add7-5809-a608-82fe32a37730", {
            headers: { "Accept-Encoding": "gzip,deflate,compress" },
        });
        const scrape = new scraping_1.Scrape(result.data);
        console.log(scrape.scrapeSiteMeta());
    }
    catch (e) {
        console.warn(e);
    }
}));
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
