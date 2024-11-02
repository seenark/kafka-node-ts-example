import { Admin } from "kafkajs";
import { kafka } from "../kafka-client";

const listTopics = async (admin: Admin) => {
  const topics = await admin.listTopics()
  return topics
}

const main = async () => {
  const admin = kafka.admin()
  const topics = await listTopics(admin)
  console.log("topics", topics)
}

main()
