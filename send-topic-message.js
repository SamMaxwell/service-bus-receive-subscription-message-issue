const { createServiceBusService } = require("azure-sb")

const sendTopicMessageAsync = async (sbCient, topic, message) =>
  new Promise((resolve, reject) => {
    sbClient.sendTopicMessage(
      topic,
      {
        body: JSON.stringify(message)
      },
      (err, message) => {
        if (err) {
          reject(err)
        } else {
          resolve(message)
        }
      }
    )
  })

const send = async (sbClient, topic, subscription) => {
  try {
    await sendTopicMessageAsync(sbClient, topic, subscription)
    console.log(new Date().toISOString(), "message sent!")
  } catch (err) {
    console.error(new Date().toISOString(), "error", err)
  }
}

const sbConnectionString = process.argv[2]
const topic = process.argv[3]
const message = process.argv[4]

const sbClient = createServiceBusService(sbConnectionString)
send(sbClient, topic, message)
