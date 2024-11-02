import { Admin } from "kafkajs";
import { kafka } from "./kafka-client";


const createAnimalTopic = async (admin: Admin) => {
  const res = await admin.createTopics({
    topics: [{
      topic: "animals",
      replicationFactor: 3,
      numPartitions: 5
    }]
  })
  console.log("create topic res", res)
}

const admin = kafka.admin()
createAnimalTopic(admin)
