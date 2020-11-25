const memberSchema = mongoose.Schema({
    name: String,
    email: String,
    credit: Number
});

const Member = mongoose.model("Member", memberSchema);

//Type 1
var member1 = new Member({
    name: "Space The Final Frontier",
    email: "coba-cobaDB@nyoba.com"
});
member1.save((error, savedDocument)=>{
    if(error) console.log(error);
    console.log(savedDocument);
});

//Type 2
Member.create(
    {
        name: "Starship Member",
        email: "membershipcobaDB@nyoba.com",
        credit: 100000
    },
    function (error, savedDocument){
        if(error)console.log(error);
        console.log(savedDocument);
    }
);