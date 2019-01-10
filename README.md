# Smart Car Server

Adv Networking Project with multiple backend solution using different protocols (HTTP, MQTT)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine 
for development and testing purposes. 
See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to install:
* node and all the dependencies
* InfluxDB

### Installing

#### Install node 

Go to: https://nodejs.org/it/ and download Node.js and install node.

To download dependencies just run:
```
npm install
```
You also need to install InfluxDB to store all the data.
Go to: https://portal.influxdata.com/downloads under InfluxDB section then click on v1.x.x and choose one OS.

#### Install InfluxDB

After downloading InfluxDB run influxd.exe to start the daemon.
To test the Smart Car Server you also need to run influx.exe and run:
```
create database cars_data;
```

## Deployment

TO DO

## Built With

* [Node.js](https://nodejs.org/it/) - Javascript run-time enviroment
* [Restify](http://restify.com/) - Web service framework
* [InfluxDB](https://www.influxdata.com/) - Database
