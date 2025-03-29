/*
Some cool HTML tags that I didn't know existed! Fun.
*/

import "./NewTags.css";

import { PasswordCreator } from "./FunComponents";

export function NewTags() {
	return (
		<div className="root">
			<div>
				<h1>New HTML Tags</h1>
				<p>Hey, check out this cool code I made!
					<code>	
					public static void doSomething(String data)
					</code></p>
				
				<p>I wonder how that looks! You can also style it using CSS.</p>
				<code className="code-snippet">
					public static void doSomething(String data)
				</code>
				<h1>Keyboard</h1>
				<p>Whatever you do, don't press <kbd>CTRL</kbd> + <kbd>W</kbd>. Don't do it!</p>

				<div className="data">
					<input type="input" list="values"/>
					<datalist id="values">
						<option value="Cheeseburger"/>
						<option value="Corned Beef Sandwich"/>
						<option value="Strawberry Milkshake"/>
						<option value="Sweet Potato Fries"/>
						<option value="Beef Stroganoff"/>
					</datalist>
				</div>

				<h1>Details and Summary</h1>
				<details>
					<summary>This is the title you see</summary>
					{/* I think all this stuff below summary gets included. */}
					<h1>What's going on?</h1>
					<p>I think you found the secret text.</p>
				</details>

				<details>
					<summary>Another title</summary>
					{/* I think all this stuff below summary gets included. */}
					<div className="details-text">
						<details>
							<summary>Another one?</summary>
							<p>That's all for now, folks! (maybe add some indents)</p>
						</details>
					</div>
					<h1>What's going on?</h1>
					<p>I think you found the secret text.</p>
				</details>

				<h1>Progress Bars!</h1>
				<progress value={80} max={100}></progress>
				<p>Woaaah! We're 80% there! Woah! Livin' on a prayer!</p>
				<p>It just doesn't have the same ring to it...</p>

				<h1>Meters</h1>
				{/* Changes color depending on your input value...
				Could be really useful for a password length checker.			
				*/}
				<meter min={0} max={100} value={90} low={30} high={60} optimum={90}></meter>
			</div>
			<div className="pwd">
				<h1>My Password Creator</h1>
				
				<PasswordCreator></PasswordCreator>
			</div>
		</div>
		
	);
}