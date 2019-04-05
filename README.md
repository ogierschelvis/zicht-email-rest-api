# Zicht Email REST API

This is a RESTful API for maintaining an list of names and email addresses

## Getting Started

### Prerequisites

For development you need Node.js, Robomongo (or Robo 3T) and make sure you have MongoDB server running 
Install LoopBack CLI (preferrably) globally using npm:

```bash
npm i -g loopback-cli
```

### Choices

Since the datamodel is so simple I figured a relational database model seemed overkill.
There's no need for complex transactions that need to be reversed.
The NoSQL database I am most familiar with is MongoDB (also used in RocketChat). 
So I chose that as data store.

Furthermore I chose the [LoopBack](https://loopback.io/) API framework to create my API, since it can easily create a RESTful API just from the CLI.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Ogier Schelvis** - *Initial work* - [GitHub](https://github.com/ogierschelvis)
