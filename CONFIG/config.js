import Sequelize from "sequelize";

export const light = new Sequelize("lightDB", "root", "ROOT",{
    host: "localhost",
    dialect: "mysql"
});