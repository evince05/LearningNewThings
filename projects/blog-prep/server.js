// Test API keys

import "dotenv/config"
import fs from "fs"


// default mysql has some weird auth issue.
import mysql from "mysql2"; 

import {v4 as uuidv4} from "uuid";


var sql = mysql.createConnection({
	host: process.env.HOST,
	database: process.env.DATABASE,
	user: process.env.USER,
	password: process.env.PASSWORD
});

function populateTableData(fileName) {

	if (!fileName) throw new Error("Invalid filename");

	fs.readFile(fileName, "utf-8", (err, data) => {

		if (err) throw Error(err);

		// for (let line in data.split("\n")) {
		// 	console.log(line);
		// 	console.log("new line");
		// }

		const query = `INSERT INTO blogData (blogId, blogData) VALUES (${mysql.escape(uuidv4())}, ${mysql.escape(data)})`;
		sql.execute(query);
	});
}

sql.connect((error) => {
	if (error) throw error;

	let write = false;
	console.log("Connected to the DB!");

	if (write) {
		populateTableData("DummyBlog.md");
	}
	else {
		sql.execute("SELECT * FROM blogData", (err, result, rows) => {

			console.log(rows);

			console.log("Result");
			console.log(result[0].blogId);

			for (const row of result) {
				console.log("New Blog...");
				console.log(row.blogData);
			}

		});
	}
	


});
