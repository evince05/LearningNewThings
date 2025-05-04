const express = require("express");
const cors = require("cors");

const mysql = require("mysql2");

const app = express();

const {OrderQueue} = require("./OrderQueue.js");
const {SQLHandler} = require("./SQLHandler.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const PORT = 8000;

const orders = new OrderQueue();

require("dotenv").config();

const sql = new SQLHandler(mysql, process.env.SQL_USER, process.env.SQL_PASS);


// Setup the server
app.listen(PORT, () => {
	console.log(`Welcome to the jungle! Hosted on port ${PORT}`);
})

// Recall: req stores incoming info from client, res stores outgoing info
app.post("/order", (req, res) => {

	var order = req.body;

	const result = sql.postNewOrder(order);
	console.log(result);

	// Send response back to client
	res.status(200).send({"message": result});
});

app.get("/my-order", (req, res) => {
	res.send({"queueSize": orders.size()});
});

app.get("/pickup", (req, res) => {
	let orderNum = orders.dequeue();
	res.status(200).send({message: `Finishing order ${orderNum}`});
})

app.get("/menu", async (req, res) => {
	
	result = await sql.executeQuery("SELECT * FROM flavors");
	// res.send(result);
	res.status(200).send(result);
});

app.get("/menu/:id", async (req, res) => {
	
	result = await sql.executeQuery(`SELECT * FROM flavors WHERE FlavorID = ${req.params.id}`);
	// res.send(result);
	res.status(200).send(result[0]);
});