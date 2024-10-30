const express = require("express")

const app = express()

const port = 3003

const host = "http://127.0.0.1:"

app.use(express.static("public"))

app.get("/", (req, res) =>{
    res.send("<h1>Benvenuto nel mio blog</h1>")
})


app.listen(port, ()=>{
    console.log(`Server run on:${host}${port}`);
    
})