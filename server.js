const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to moongose

//require route


//port must be different from react(3000)
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});