/*
A simple React menu where customers can place orders.
*/

import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

export function PlaceOrder() {

	const navigate = useNavigate();

	class Flavor {
		constructor(id, name, pricePerScoop) {
			this.id = id;
			this.name = name;
			this.pricePerScoop = pricePerScoop;
		}
	}

	// Is it better to query the SQL directly instead of using an indexing function like so?
	const FLAVORS = [
		new Flavor(0, "Rocky Road", 2.99),
		new Flavor(1, "Rainbow Sherbert", 1.49),
		new Flavor(2, "Vanilla Walnut", 2.99),
		new Flavor(3, "Black Cherry", 2.49),
		new Flavor(4, "Cookie Dough", 2.49),
		new Flavor(5, "Grape", 2.49),
		new Flavor(6, "Bubble Gum", 2.49),
		new Flavor(7, "Mint Chocolate Chip", 2.49)
	];

	function moveToCheckout(order) {

		// Disassemble data using order.get("name"), where name is one of the input names.
		console.log("Staging new order")

		var flavor = FLAVORS[order.get("flavors")];
		var numScoops = order.get("numScoops");
		var container = order.get("container");

		var price = numScoops * flavor.pricePerScoop;

		console.log(`Confirm Order: [${container}] ${numScoops} of ${flavor.name}... $${price}`)

		// Validate inputs
		if (!flavor || !numScoops || !container) {
			alert("Invalid order!");
			return;
		}

		navigate("/confirm-order", {state: {flavor, numScoops, container}});

	}

  	return (
		<div id="order-root">
			<h1>Place an Order</h1>

			{/*
			TODO: Add functionality to load flavors from SQL database.		 
			*/}

			{/* note: id is unique, className can be shared. */}
			<form id="order-form" action={moveToCheckout}>
				<h2>Pick Your Flavor</h2>
				<select name="flavors" className='flavors-list'> 
					{FLAVORS.map((flavor) => {
						// Some formatting. Note, the "value" tag dictates what gets sent to the server upon submission.
						return <option value={flavor.id}>{flavor.name} - ${flavor.pricePerScoop}/scoop</option>;
					})};
				</select>
				{/* fieldset groups related values together inside a form */}
				<fieldset>
					{/* Note: inputs don't have labels on their own. labels can directly attach to an input via the "for" tag. */}
					<h2>Scoops</h2>
					<label for="1scoop">1</label>
					<input type="radio" id="1scoop" name="numScoops" value={1}/><br/>

					<label for="2scoop">2</label>
					<input type="radio" id="2scoop" name="numScoops" value={2}/><br/>

					<label for="3scoop">3</label>
					<input type="radio" id="3scoop" name="numScoops" value={3}/>
				</fieldset>

				<fieldset>
					<h2>Bowl or Cone</h2>
					<label for="bowl">Bowl</label>
					<input type="radio" id="bowl" name="container" value="Bowl"/>

					<label for="cone">Cone</label>
					<input type="radio" id="cone" name="container" value="Cone"/>
				</fieldset>
				<input type="submit" value="Place Order"/> {/* this goes to a "checkout" page*/}
			</form>
		</div>
	)
}

export function ConfirmOrder() {

	const {order} = useLocation();

	function sendOrderToServer() {

		// send to backend via API
		order =2;
	}

	return (
		<div id="confirm-root">
			<h1>Confirm Your Order</h1>
			{order && (
				<div className='order-card'>
					<h2>Your Order</h2>
					<h3>Flavor: {order.flavor.name}</h3>
					<h3>Scoops: {order.numScoops}</h3>
					<h3>Container: {order.container}</h3>
					<h3><b>Price: ${order.flavor.pricePerScoop * order.numScoops}</b></h3>
				</div>
			)}
			<button disabled={!order} onClick={sendOrderToServer}>Place Order</button>
			<h4></h4>
		</div>
	);
}
