const { Kafka, logLevel } = require('kafkajs');
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
  logLevel: logLevel.ERROR,
});
const producer = kafka.producer();
const sendMessageToKafka = async (req, res) => {
  try {
    const { lat, long, message, key } = req.body;
    // console.log('message is ', message);
    const messages = { key: key, lat: lat, long: long, value: message };

    await producer.connect();
    await producer.send({
      topic: 'topic1',
      messages: [{ value: JSON.stringify(messages) }],
    });
    await producer.disconnect();

    return res.status(200).json({ status: 'OK', message: messages });
  } catch (error) {
    console.log('error is ', error);
  }
};

const controllers = { sendMessageToKafka };

module.exports = controllers;
