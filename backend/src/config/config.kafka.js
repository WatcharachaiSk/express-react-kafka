const {Kafka} = require('kafkajs');

class KafkaConfig {
  constructor() {
    this.kafka = new Kafka({
      clientId: 'kafka',
      brokers: ['localhost:9093'],
    });
    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({ groupId: 'test' });
  }

  async producer(topic, messages) {
    try {
      await this.producer.connect();
      await this.producer.send({
        topic: topic,
        messages: messages,
      });
    } catch (error) {
      console.log("error is ",error);
    } finally {
      await this.producer.disconnect();
    }
  }
  async consumer(topic, callback) {
    try {
      await this.consumer.connect();
      await this.consumer.subscribe({
        topic: topic,
        fromBeginning: true,
      });
      await this.consumer.run({
        eachMessage: async ({ topic, partiion, messages }) => {
          const value = messages.value.toString();
          callback(value);
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = KafkaConfig;
