const { createServiceBusService } = require("azure-sb")

const receiveSubscriptionMessageAsync = async (sbCient, topic, subscription) =>
  new Promise((resolve, reject) => {
    sbClient.receiveSubscriptionMessage(topic, subscription, (err, message) => {
      if (err) {
        reject(err)
      } else {
        resolve(message)
      }
    })
  })

const loop = async (sbClient, topic, subscription) => {
  while (true) {
    try {
      const message = await receiveSubscriptionMessageAsync(
        sbClient,
        topic,
        subscription
      )
      console.log(new Date().toISOString(), "message", message)
    } catch (err) {
      console.error(new Date().toISOString(), "error", err)
    }
  }
}

const sbConnectionString = process.argv[2]
const topic = process.argv[3]
const subscription = process.argv[4]

const sbClient = createServiceBusService(sbConnectionString)
loop(sbClient, topic, subscription)
