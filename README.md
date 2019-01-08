# service-bus-receive-subscription-message-issue

This repo demonstrates the problem we are having to receive service bus messages.

the receiveSubscriptionMessage call will throw "No message to receive" when there are messages in the subscription

- create a service bus account
- add a topic named my-topic
- add a subscription named my-subscription

do this to send several messages (with a sequence)

`node ./send-topic-message "service-bus-connection-string" my-topic "message number 1"`

`node ./send-topic-message "service-bus-connection-string" my-topic "message number 2"`

`node ./send-topic-message "service-bus-connection-string" my-topic "message number 3"`

`node ./send-topic-message "service-bus-connection-string" my-topic "message number 4"`

`node ./send-topic-message "service-bus-connection-string" my-topic "message number 5"`

then do this do recieve the messages

`node ./send-topic-message "service-bus-connection-string" my-topic my-subscription`

see how long it takes to receive the 5 messages and whether they arrive in order
