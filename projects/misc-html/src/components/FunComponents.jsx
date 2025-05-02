/*
Some fun custom components (me just messing around with stuff!)
*/

import { useState } from "react";

import "./FunComponents.css";

export function PasswordCreator() {

	const [input, setInput] = useState(null);
	// Password length constants
	const WEAK = 5;
	const GOOD = 8;
	const STRONG = 10;

	// Input box for password, user can input password, meter tells them if its too short, weak, or good.
	return (
		<div className="in-box">
			<input type="password" placeholder="Create your password..." onChange={(e) =>setInput(e.target.value)}></input>
			<meter className="password-meter" min={0} max={STRONG} low={WEAK} high={GOOD} optimum={STRONG} value={input ? input.length : 0}></meter>
			<h4>{input && (input.length < GOOD ? "Password needs 8+ characters" : "Password is good")}</h4>
			<button disabled={!input || (input.length < GOOD)}>Create Account</button>
		</div>
	);
}