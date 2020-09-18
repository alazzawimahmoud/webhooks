- lib:shared: privately publishable library across micro-services 
    * contains shared types
    * contains shared configurations
    * contains shared business logic across micro-services

- lib:client: publicly publishable helper library for consumers 
    * contains types used by final consumers of webhooks
    * methods to unwrapped received data

- app:api: business logic
    * publish messages from controllers, with configuration based on business logic
    * registers webhooks configurations per client
    * holds test scenarios 

- app:worker: webhooks worker micro-service
    * receives messages, checks & process them through controllers
    * responsible of sending secure messages to final consumers

- app:frontend: angular app to interact with API
    * trigger user events
    * submit consumer webhooks
    * trigger test scenarios

- app:consumer: NextJs sample application consuming incoming webhooks
    * POST REST API route accepting a secured webhook messages
    * Frontend to display incoming messages


- Redis instance 

- Database instance

