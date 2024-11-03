const express = require("express")
const Postlist = require("./Controllers/postscontroller.js")
const cors = require('cors');

const app = express()
const port = 3003
const host = "http://127.0.0.1:"

app.use(cors({
    origin: 'http://127.0.0.1:3000', // consenti solo richieste da questo dominio
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // specifica i metodi ammessi
    credentials: true // permette l'uso di cookie o autorizzazioni
  }));

app.get(`/`, Postlist.getPosts)

app.listen(port, () => {
    console.log(`Server in esecuzione su: ${host}${port}`)
})


app.use(express.static("public"))