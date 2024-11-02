import { Producer } from "kafkajs";
import { kafka } from "./kafka-client";
import { Chance } from "chance"

const topic = "animals"
const chance = new Chance()

const produceMessage = async (producer: Producer) => {
  const animal = chance.animal()
  console.log("animal:", animal)
  try {
    await producer.send({
      topic: topic,
      messages: [
        { value: animal }
      ]
    })
  } catch (error) {
    console.log(error)
  }
}

const run = async (producer: Producer) => {
  await producer.connect()
  setInterval(() => produceMessage(producer), 1000)
}

const producer = kafka.producer()
run(producer)
