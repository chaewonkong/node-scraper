import fastify from "fastify";
import axios from "axios";

const server = fastify();

server.get("/ping", async (req, res) => {
  return "pong";
});

server.get("/test", async (req, res) => {
  try {
    const result = await axios.get("http://naver.com");
    console.log(result.data);
  } catch (e) {
    console.log(e);
  }
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
