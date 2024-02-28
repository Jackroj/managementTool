const { handleGetUser, createUser, handleUpdateUser, handleDeleteUser } = require("../controller/userController");

async function routes (fastify, options) {
    fastify.get("/healthcheck", async (_request, reply) => reply.send("Hi I'm Alive"));
    fastify.get("/", async (_request, reply) => reply.send("Welcome"));
    fastify.get("/user", handleGetUser);
    fastify.post("/user/store", createUser)
    fastify.put("/user/update", handleUpdateUser)
    fastify.delete("/user/delete/:id", handleDeleteUser)
  }
  
module.exports = routes