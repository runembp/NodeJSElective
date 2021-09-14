const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.sendFile("views/index.html", {root: __dirname })
})

app.get("/dankmemes", (req, res) => {
    res.send(JSON.stringify(memes))
})

app.get("/dankmemes/:id", (req, res) => {
    res.send(memes[req.params.id])
})

app.get('/random', (req,res) => {
    let randomNumber = Math.floor(Math.random() * memes.length)
    res.send(memes[randomNumber])
})

let memes = [
    {id:0,"meme":"https://i.redd.it/mixo2wxr4fn71.jpg"},
    {id:1,"meme":"https://i.redd.it/n35ri746fgn71.jpg"},
    {id:2,"meme":"https://preview.redd.it/wo9ssw4mqen71.gif?format=mp4&s=19587fe8bb552a86ebd18c3fc3f66f5b4a489352"},
    {id:3,"meme":"https://i.redd.it/lzsh3hmz6en71.jpg"},
    {id:4,"meme":"https://i.redd.it/0jigz430pen71.jpg"},
    {id:5,"meme":"https://i.redd.it/h5z0r922xbn71.jpg"},
    {id:6,"meme":"https://i.redd.it/gzm6bzsp4hn71.png"},
    {id:7,"meme":"https://i.redd.it/eexlyh39dgn71.jpg"},
    {id:8,"meme":"https://preview.redd.it/kx7o0oubhbn71.gif?format=mp4&s=062e517a6b6ea7051f605ba8f195ec27aa572cde"},
    {id:9,"meme":"https://i.redd.it/nvmv8iy7qbn71.jpg"},
]

app.listen(8080, () =>{
    console.log("Server running on http://localhost:8080/")
})