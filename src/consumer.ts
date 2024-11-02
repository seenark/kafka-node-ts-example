import { Kafka } from "kafkajs"

const kafka = new Kafka({
  clientId: "my-consumer",
  brokers: ["localhost:9092", "localhost:9093", "localhost:9094"]
})

const topic = "animals"
const main = async () => {
  const consumer = kafka.consumer({
    groupId: "animals-group",
  })

  await consumer.connect()

  consumer.subscribe({
    topic,
    fromBeginning: true
  })

  consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const buffValue = message.value as ArrayBuffer
      const value = buffValue.toString()
      console.log({ topic, partition, message, value })
    }
  })
}

main()
