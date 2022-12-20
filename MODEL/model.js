import { Sequelize, DataTypes } from "sequelize";
import { light } from "../CONFIG/config.js";

export const lightModelOne = light.define("meterOwners",{
    streetName: {
        type: DataTypes.STRING
    },
    meterOwner: {
        type: DataTypes.STRING
    },
    meterType: {
        type: DataTypes.STRING
    },
    meterNumber: {
        type: DataTypes.DOUBLE
    },
    meterPasscode:{
        type: DataTypes.INTEGER
    },
    hoursOfLightsupply:{
        type: DataTypes.INTEGER
    },
    costOfSupplyinKWH:{
        type: DataTypes.DECIMAL
    }
},{
    freezeTableName: true
});

export const lightModelTwo =  light.define("nonmeterOwners",{
    nonmeterOwner:{
        type: DataTypes.STRING
    },
    numberOfBookedmeter:{
        type: DataTypes.INTEGER
    },
    meterTypebooked: {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});