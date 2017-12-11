const express = require("express");
const {json} = require("body-parser");
const cors = require("cors");
const mainCtrl = require("./controllers/mainCtrl");
const axios = require('axios')

const port = 3001;

const app = express()

app.use(json());
app.use(cors());


app.get("/api/skills", mainCtrl.getSkill);
app.post("/api/skills", mainCtrl.addSkill);
app.put("/api/skills/:id", mainCtrl.updateSkill);

app.get("/api/races", mainCtrl.getRace);
app.post("/api/races", mainCtrl.addRace);
app.put("/api/races/:id", mainCtrl.updateRace);

app.get("/api/classes", mainCtrl.getClass);
app.post("/api/classes", mainCtrl.addClass);
app.put("/api/classes/:id", mainCtrl.updateClass);

app.delete("/api/skills/:id", mainCtrl.charDeath);
app.delete("/api/classes/:id", mainCtrl.charDeath);
app.delete("/api/races/:id", mainCtrl.charDeath);

app.listen(port, () =>{
    console.log(`listening on port: ${port}.`);
});