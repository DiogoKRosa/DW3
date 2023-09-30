const express = require("express")//Importando o Express
const app = express()//Iniciando o Express

app.set('view engine' , 'ejs')//para renderizar as páginas html

app.get("/",(req, res) => {//cria uma rota do site
    res.render("index")//Envia a requisição
})
app.get("/perfil", (req, res) =>{
    res.render("perfil")
})
app.get("/pedidos", (req, res) =>{
    res.render("pedidos")
})
app.get("/videos", (req, res) =>{
    res.render("videos")
})

app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro")
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})