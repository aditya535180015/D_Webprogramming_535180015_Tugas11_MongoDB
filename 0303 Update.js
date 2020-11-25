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

Member.updateOne({name: "Starship member"}, { credit: 1031000}, (err, raw)=>{

    Member.findOne({ name: "Starship member"}).exec((error, data)=>{
        if(data) console.log("Find One: " + JSON.stringify(data));
    });
});