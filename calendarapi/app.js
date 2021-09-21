const express = require("express")
const app = express()

app.get("/", (req,res) => {
    res.send("Endpoints available: /date, /time, /dayofweek, /month")
})

app.get("/date", (req, res) => {
    const date = new Date()
    res.send({day: new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date)});
})

app.get("/time", (req, res) => {
    const date = new Date()
    res.send(`Current Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
})

app.get("/dayofweek", (req, res) => {
    const date = new Date()
    const weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    res.send({day: weekDays[date.getDay()]})
    //res.send(`Current Day of week: ${weekDays[date.getDay()]}`)
})

app.get("/month", (req, res) => {
    const date = new Date()
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    res.send(`Current month of year: ${months[date.getMonth()]}`)
})

app.listen(8080,() => {
    console.log("Server running at http://localhost:8080/")
})