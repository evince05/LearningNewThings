export class SQLHandler {

	constructor(mysql, user, pass) {  // temp fix before I learn about modules... apparently "require" is used for commonJS modules (like in NodeJS)
		var con = mysql.createConnection({
			host: "localhost",
			user: user,
			password: pass,
			database: "icecream"
		});

		con.connect(function(err) {
			if (err) {
				console.error("Could not connect to MySQL!");
				throw err;
			}

			// Success
			console.log("Connected!")
		});

		this.con = con;
	}

	postNewOrder(order) {
		var query = `INSERT INTO orders (CustomerID, Flavor, Scoops, Container) VALUES (${1}, ${order.flavor.FlavorID}, ${order.numScoops}, \"${order.container}\");`
		this.con.query(query, (err, rows) => {
			if (err) throw err;
			return rows;
		});
	}

	executeQuery(query) {

		// con.query is non-blocking and uses a callback, so we have to wrap it in a promise to await it.
		return new Promise((resolve, reject) => {
			
			this.con.query(query, (err, result) => {
				if (err) return reject(err);
				// return the rows from the SQL query.
				resolve(result); // NOTE: You need to resolve this in order to return the promise. (err, result) is a callback function so you have to return it.
			});
		});
	}
}