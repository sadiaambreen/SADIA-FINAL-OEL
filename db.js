// CREATING A DATABASE:🧮 

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/EmployesDB",
    {
        
        useNewUrlParser: true,
       // useCreateIndex: true,
    })
    .then(() => console.log("connection successfull...."))
    .catch((err) => console.log(err));
