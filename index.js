import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));

var toDoListDay = [];
var toDoListWork = [];

let date = new Date().toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"} );
let year = new Date().getFullYear()

app.post("/", (req, res) => {
    const thing = req.body.newItem;
    toDoListDay.push(thing);
    res.redirect("/")
});

app.get("/", (req, res) => {
    res.render("index.ejs", {
        date: date,
        year: year,
        toDoListDay: toDoListDay,
    });
});

app.post("/work", (req, res) => {
    const thing = req.body.newItem;
    toDoListWork.push(thing);
    res.redirect("/work")
});

app.get("/work", (req, res) => {
    res.render("index.ejs", {
        year: year,
        toDoListWork: toDoListWork,
    });
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

