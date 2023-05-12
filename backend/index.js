const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./src/controller/kafka.controller');
const KafkaConfig = require('./src/config/config.kafka');
const dotenv = require('dotenv');
const { Kafka } = require('kafkajs');


dotenv.config();
const port = process.env.PORT;

const app = express();
const jsonParser = bodyParser.json();

app.post('/api/send', jsonParser, controllers.sendMessageToKafka);



// // consume Test
// const kafkaConfig = new KafkaConfig();
// kafkaConfig.consumer('my-topic', (value) => {
//   console.log(value);
// });

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
