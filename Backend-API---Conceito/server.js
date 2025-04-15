const express = require("express");
const cors = require("cors"); 
 
const app = express(); 
const router = require("./src/router/router"); 
 
const apiPort = 8080;
 
const sequelize = require("./src/config/config");
 
app.use(express.json()); 
app.use(cors());
 
sequelize.authenticate()
    .then(() => {
        console.log("Conexão estabelecida com MYSQl")
    })
 
    .catch((err) => {
        console.error("Erro ao se conectar ao MYSQL")
    })
 
sequelize.sync({ force: true })
    .then(() => {
        console.log("Conexão estabelecida com MYSQl")
    })
 
    .catch((err) => {
        console.error(err)
    })

app.use("/api", router);
 
 
 
app.listen(apiPort, () => {
    console.log("Api rodando com sucesso")
})  