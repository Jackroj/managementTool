require('dotenv').config();
(async() => {
   try {
      const { build } = require("./app.js");
      const app = await build();
      await app.listen({ port: process.env.PORT || '3025', host: "0.0.0.0"})
   } catch (error) {
      console.log(error);
      process.exit(1)
   }
})();