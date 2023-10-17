const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
})

const producer = kafka.producer()

producer.connect().then(async () => {
    await producer.send({
        topic: 'test-event',
        messages: [
            { value: 'hello' },
        ],
    });
})
