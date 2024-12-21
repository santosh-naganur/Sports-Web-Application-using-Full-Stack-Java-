const express = require("express")
const cors = require("cors")
const app = express();

var corsOptions = {
    origin : "*"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const db = require("./app/models");
db.mongoose.connect(db.url,{
    useNewUrlParser : true,
    //useunifieldTopology : tapprue
}).then(()=>{
    console.log("connected to db");
}).catch(err =>{
    console.log("cannot Connect to the db",err);
    process.exit();
});

app.get("/",(req,res) => {
    res.json({msg : "welcome to my app"});
});

require("./app/routes/user.routes")(app);

app.listen(5001,() =>{
    console.log(`Server listening on port 5001`);
});