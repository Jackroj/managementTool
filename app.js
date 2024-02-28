"use strict";
const Fastify = require('fastify');
const mySQLConnection = require("./dbconnection/mysql");


const build = async () => {
  const fastify = Fastify({
    bodyLimit: 1048576 * 2,
    logger: true
  });
  await fastify.register(require('./routes'))
  fastify.register(require("fastify-cors"), {
    origin: "*",
    methods: ["POST", "GET", "PUT", "DELETE"]
  });
  await Promise.all([mySQLConnection()]);
  return fastify;
};

module.exports = {
  build
};