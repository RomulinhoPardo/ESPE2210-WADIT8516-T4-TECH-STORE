const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors')
const userRoute = require("./routes/user");
const CustomerRoute = require("./routes/CustomerRoute");
require ('dotenv').config();

mongoose.set('strictQuery', true);
const app = express();
const PORT = process.env.PORT || 3004

app.use (cors())

//midlewares
app.use(express.json());
app.use("/api", userRoute);
app.use("/api",CustomerRoute)

//routes
app.get("/", (req, res) => {
    res.send('Welcome to  my API TEAM4');
    res.json({ok:true})
});

 mongoose.connect(process.env.URI_MONGODB)
.then(()=> console.log('Connect to MONGODB TECHSTORE is Successfully 👋'))
.catch((error) => console.log('Connection fail MongoDB Atlas'));


app.listen(PORT, () => console.log('Server started on port', PORT ));
