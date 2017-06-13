# Database Server

A one-day challenge to implement a basic web application. It stores parameters passed to it at a `/set` address, and it returns saved parameters at a `/get` address.

## Installation
The following assumes you have Node installed:

1. Clone the repository: `git clone git@github.com:adc17/database-server.git`.
2. `npm install`.

## Usage

1. Run `npm start` and navigate to `http://localhost:4000/`.
2. To save a parameter: `localhost:4000/set?param-key=param-value`.
3. To get a saved parameter: `localhost:4000/get?key=param-key`.

## Tests

```
npm test
```

## Specification

You receive a message from a prospective employer:

"Before your interview, write a program that runs a server that is accessible on `http://localhost:4000/`. When your server receives a request on `http://localhost:4000/set?somekey=somevalue` it should store the passed key and value in memory. When it receives a request on `http://localhost:4000/get?key=somekey` it should return the value stored at `somekey`. Store the data in memory, not in a database, but bear in mind that you will later need to add a database to this code."

Create a new git repository and write code to fulfill the brief to the best of your ability. We will be looking for clean, well tested code in your choice of technology. In addition, the last sentence of the brief implies that you should consider how the code could easily be extended to add an as-yet-unknown data store.

If you still have time at the end of the day, you can extend the code by adding a data store of your choice.

### User Stories:

```
as a data worker
so i can save data
i would like an address at which to save it

as a bank client
so i can retrieve data
i would like an address at which to retrieve it
```
## Other notes

A challenge from the [Makers Academy](http://www.makersacademy.com) Bootcamp.
