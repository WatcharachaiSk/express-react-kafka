const { Kafka } = require('kafkajs');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const app = express();

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'my-group' });

app.use(express.json());

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'topic1', fromBeginning: true });

  await consumer.run({
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

run().catch(console.error);
