const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const apps = require("./routes/patientRoute");

app.use(cors());
app.use(express.json());

// connect to moongose
mongoose.connect("mongodb+srv://dbUser:Admin123@celcluster.p4l5f.mongodb.net/medical_records_db", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

// mongoose.connect(
//     process.env.MONGODB_URI || 'mongodb://localhost/medical_records_db',
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     }
//   );
  
//   if (process.env.NODE_ENV === 'production') {
//     // Express will serve up production assets
//     app.use(express.static('frontend/build'));
//   };


//require route
app.use(apps);

   // Express serve up index.html file if it doesn't recognize route
   const path = require('path');
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend/public/index.html'));
  });

//port must be different from react(3000)
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});