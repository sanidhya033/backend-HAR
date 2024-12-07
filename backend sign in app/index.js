const express = require('express');
const { gatherinfo } = require("./types");
const { info } = require("./db");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/submit", async function(req, res) {
   const createPayload = req.body;
   const parsedPayload = gatherinfo.safeParse(createPayload);
   if (!parsedPayload.success) {
       res.status(411).json({ msg: "You send Wrong inputs" });
       return;
   }
   await info.create({
       name: createPayload.name,
       email: createPayload.email,
       subject:createPayload.subject,
       mssg:createPayload.mssg
   });
   res.json({ msg: "Information Added" });
});

app.listen(3000);
