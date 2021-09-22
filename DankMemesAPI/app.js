const express = require("express")
const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile("views/index.html", {root: __dirname })
})

// The sequence of end points are important. /dankmemes/random/ will be read first, before a /dankmemes/:id endpoint

app.get('/dankmemes/random/', (req,res) => {
    let randomNumber = Math.floor(Math.random() * memes.length)
    res.send({meme: memes[randomNumber]})
})

app.get("/dankmemes", (req, res) => {
    res.send({memes: memes})
})

app.get("/dankmemes/:id", (req, res) => {
    res.send({meme: memes[req.params.id]})
})

app.post("/dankmemes", (req, res) => {
    memes.push({ meme: { id: memes.length, meme: req.body.meme }})
    res.sendStatus(200)
})

app.put("/dankmemes/:id", (req, res) => {
    memes[req.params.id].meme.meme = req.body.meme.meme;
    res.sendStatus(200)
})

app.patch("/dankmemes/:id", (req, res) => {
    memes[req.params.id].meme.meme = req.body.meme.meme;
    res.sendStatus(200)
})

app.delete("/dankmemes/:id", (req, res) => {
    memes.forEach(meme => {
        if(meme.meme.id === parseInt(req.params.id))
        {
            memes.splice(req.params.id,1)
            res.sendStatus(200)
        }
    })
    res.end()
})

app.listen(8080, (error) =>{
    if(error)
    {
        console.log(error)
    }
    console.log("Server running on http://localhost:8080")
})

const memes = [
    {meme: { id: 0, "meme":"https://i.redd.it/mixo2wxr4fn71.jpg"} },
    {meme: { id: 1, "meme":"https://i.redd.it/n35ri746fgn71.jpg"} },
    {meme: { id: 2, "meme":"https://preview.redd.it/wo9ssw4mqen71.gif?format=mp4&s=19587fe8bb552a86ebd18c3fc3f66f5b4a489352"} },
    {meme: { id: 3, "meme":"https://i.redd.it/lzsh3hmz6en71.jpg"} },
    {meme: { id: 4, "meme":"https://i.redd.it/0jigz430pen71.jpg"} },
    {meme: { id: 5, "meme":"https://i.redd.it/h5z0r922xbn71.jpg"} },
    {meme: { id: 6, "meme":"https://i.redd.it/gzm6bzsp4hn71.png"} },
    {meme: { id: 7, "meme":"https://i.redd.it/eexlyh39dgn71.jpg"} },
    {meme: { id: 8, "meme":"https://preview.redd.it/kx7o0oubhbn71.gif?format=mp4&s=062e517a6b6ea7051f605ba8f195ec27aa572cde"} },
    {meme: { id: 9, "meme":"https://i.redd.it/nvmv8iy7qbn71.jpg"} },
]