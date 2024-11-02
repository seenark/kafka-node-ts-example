import { kafka } from "../kafka-client"

const main = async () => {

  const admin = kafka.admin()
  const res = await admin.fetchTopicMetadata({
    topics: ["animals"]
  })
  console.log("res", res)
  res.topics.forEach(topic => {
    console.log("topic name: ", topic.name, "👇")
    console.table(topic.partitions)
  })
}

main()
