const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req, res)=>{
	const url = "mongodb+srv://rajkhairnar26:V0KGJne5xNw3EW32@cluster0.leittwz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("wn25june24");
	const coll = db.collection("student");
	const record = {"name":req.body.name, "choice":req.body.choice};
	coll.insertOne(record)
	.then(result=> res.send(result))
	.catch(error=> res.send(error));
});

app.listen(9000, ()=> {console.log("Sever ready @ 9000");});