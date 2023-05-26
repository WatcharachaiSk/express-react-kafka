const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./src/controller/kafka.controller');
const KafkaConfig = require('./src/config/config.kafka');
const { Server } = require('socket.io');
const { Kafka } = require('kafkajs');
const http = require('http');

const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const port = process.env.PORT;
const app = express();
const server = http.createServer(app);
app.use(cors());
const jsonParser = bodyParser.json();

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'my-group' });

const io = new Server(server, {
  cors: [
    {
      origin: 'http://localhost:5173',
      methods: ['GET', 'POST'],
    },
    {
      origin: 'http://127.0.0.1:5173',
      methods: ['GET', 'POST'],
    },
  ],
});
async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'topic1', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const messageValue = JSON.parse(message.value.toString());
      io.emit('message', messageValue);
      console.log({
        partition,
        offset: message.offset,
        value: messageValue,
      });
    },
  });
}

run().catch(console.error);
// Handle Socket.IO events
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle custom events
  socket.on('message', async (data) => {
    io.emit('message', data);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

app.post('/api/send', jsonParser, controllers.sendMessageToKafka);

// Start server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
