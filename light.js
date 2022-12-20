import express from "express";
import("./CONFIG/config.js");
import { Sequelize } from "sequelize";
import { Route } from "./ROUTE/route.js";
const app = express();

app.use(express.json());

app.use("/api/v1", Route);

const port = 1515;
app.listen(port,()=>{
    console.log(`Server connected to port: ${port}`)
});