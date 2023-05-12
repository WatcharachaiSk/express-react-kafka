const { Kafka } = require('kafkajs');
const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();

app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});



const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'my-group' });



app.use(express.json());

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'topic1', fromBeginning: true });

  const res = await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const messageValue = JSON.parse(message.value.toString());
      console.log({
        partition,
        offset: message.offset,
        value: messageValue,
      });
    },
  });
}

// run().catch(console.error);

server.listen(3001, () => {
  console.log("SERVER IS RUNNING 3001");
});
