import express from "express";
import { newMeterOwner, allmeterOwner, singleMeterOwner,updatemeterOwner,deletemeterOwner } from "../CONTROLLER/contrl.js";
import { newNonMeterOwner,allNonMeterOwner, singleNonMeterOwner, deleteNonMeterOwner } from "../CONTROLLER/contrl.js";
import { Sequelize } from "sequelize";

export const Route = express.Router();
//route for meterOwners
Route.post("/meterOwner", newMeterOwner);
Route.get("/meterOwner", allmeterOwner);
Route.get("/meterOwner/:id", singleMeterOwner);
Route.patch("/meterOwner/:id", updatemeterOwner);
Route.delete("/meterOwner/:id", deletemeterOwner);

//route for nonmeterOwners
Route.post("/nonmeterOwner", newNonMeterOwner);
Route.get("/nonmeterOwner", allNonMeterOwner);
Route.get("/nonmeterOwner/:id", singleNonMeterOwner);
Route.delete("/nonmeterOwner/:id", deleteNonMeterOwner);