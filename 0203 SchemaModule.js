const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    { useNewUrlParser: true }
);
const db = mongoose.connection;

db.once("open",()=>{
    console.log("Berhasil konek MongoDB pake mongoose nih!");
});

const Member = require("./models/Member");

//Type 1
var member1 = new Member({
    name: "Space The Final Frontier",
    email: "coba-cobaDB@nyoba.com"
});
member1.save((error, savedDocument)=>{
    if(error) console.log(error);
    console.log(savedDocument);
});