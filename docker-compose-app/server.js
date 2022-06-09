const express = require("express");
const redis = require("redis");

const app = express();

//redis client 생성
const client = redis.createClient({
  host: "redis-server",
  port: 6379
});

client.set("number", 0);

app.get('/', (req, res) => {
  client.get("number", (err, number) => {
    client.set("number", parseInt(number) + 1);
    res.send(`숫자가 1씩 올라갑니다. : ${number}`);
  });
});

app.listen(8080);
console.log('server is running');
