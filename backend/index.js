const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
   const { username } = req.body;
   // Get or create user on Chat Engine!
   try {
      const r = await axios.put(
         "https://api.chatengine.io/users/",
         { username: username, secret: username, first_name: username },
         { headers: { "Private-Key": "f58d91d3-554c-4e2c-ad62-064fc102d99f" } }
      );
      return res.status(r.status).json(r.data);
   } catch (e) {
      return res.status(e.response.status).json(e.response.data);
   }
});

app.listen(3001);