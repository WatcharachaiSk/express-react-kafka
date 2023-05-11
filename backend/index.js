const express = require('express');
const dotenv = require('dotenv');
const kafka = require("kafka-node");
const { Kafka, logLevel } = require('kafkajs')

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

dotenv.config();
const port = process.env.PORT;

// Kafka setup
const kafkaClient = new kafka.KafkaClient({
  kafkaHost: "localhost:9092",
});
const consumer = new kafka.Consumer(kafkaClient, [{ topic: "test" }]);

// WebSocket setup
io.on("connection", (socket) => {
  console.log("a user connected");
  consumer.on("message", (message) => {
    socket.emit("data", message.value);
  });
});





// Start server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});