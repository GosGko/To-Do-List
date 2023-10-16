import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));

let date = new Date().toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"} );
let year = new Date().getFullYear()

app.get("/", (req, res) => {
    res.render("index.ejs", {
        date: date,
        year: year,
    });
});

app.post("/", (req, res) => {
    const thing = (req.body["newItem"]);
    res.render("index.ejs", {
        date: date,
        thing: thing, 
        year: year,
    });
});

app.get("/work", (req, res) => {
    res.render("index.ejs", {
        year: year,
    });
});

app.post("/work", (req, res) => {
    const thing = (req.body["newItem"]);
    res.render("index.ejs", {
        thing: thing, 
        year: year,
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})