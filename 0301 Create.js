const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    { useNewUrlParser: true}
);
const db = mongoose.connection;

db.once("open",()=>{
    console.log("Berhasil konek MongoDB pake mongoose nih!");
});

const Member = require("./models/Member");

var member_to_insert = new Member({
    name: "Space the space",
    email: "bravethe@frontier.com",
    credit: 122131
});

member_to_insert.save((err, product)=>{
    if(err)console.log(err);
    console.log(JSON.stringify(product));
});