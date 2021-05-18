const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to moongose
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/medical_records_db',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  
  if(process.env.NODE.ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
    });
    
  }


//require route
app.use("/", require("./routes/patientRoute"));

//port must be different from react(3000)
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});