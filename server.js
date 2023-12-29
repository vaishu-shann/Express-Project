const express = require("express"); //1
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express(); //2

const port = process.env.PORT || 5000; //3
app.use(express.json());



app.use("/api/contacts", require("./routes/contactRoutes"));  
//Here app.use() is the middleware for the url "/api/contacts"

app.use("/api/users", require("./routes/userRoutes")); 
app.use(errorHandler);
//4
app.listen(port, () => {
  console.log(`server running on ${port} port`);
}); 


