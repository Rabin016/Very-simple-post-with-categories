require("dotenv/config");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/index");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
    .connect(process.env.DB_URI, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then((res) =>
        app.listen(process.env.PORT || 5000, () =>
            console.log(`Server & DB works`)
        )
    )
    .catch((err) => console.log(`server or DB not working ${err}`));

// Router
app.use(router);

if (process.env.NODE_ENV === "poduction") {
    app.use(express.static(__dirname + "./dist/"));
    app.get(/.*/, (req, res) => res.sendFile(__dirname + "./dist/index.html"));
}
