const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['127.0.0.1:9092']
})

const consumer = kafka.consumer({
    groupId: 'test-group'
})

consumer.connect().then(async () => {
    await consumer.subscribe({
        topic: 'test-event',
        fromBeginning: true
    });
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                value: message.value.toString(),
            })
        },
    })
})
