/*
 This is where the fun begins...
 - EV, 03/24/25 :)
*/

import "./BlogPage.css"

// Don't forget to store the props inside an object, { }
function AuthorTag({author, github, linkedin}) {

	return (
		<div>
			<h1>{author}</h1>
			<h3>{github}</h3>
			<h3>{linkedin}</h3>
		</div>
	);
}
export function BlogPage() {

	return (

		// First approach: creating a main div and sidebar div.
		<div className="root">
			
			<header>
				<h1>The Devlog</h1>
			</header>
			<section className="main-content">
				<nav className="sidebar">
					<h2>
						Quick Links
					</h2>
					<ul>
						<li><a href="#">Overview</a></li>
						<li><a href="#">What I'm learning</a></li>
						<li><a href="#">Demo</a></li>
						<li><a href="#">Next Steps</a></li>
					</ul>
				</nav>
				<article>
					<h1>Devlog #1: The First Start!</h1>

					{/* Simple div to store author info */}
					<AuthorTag author="Elliott Vince" 
						github="https://github.com/evince05"
						linkedin="https://linkedin.com/in/elliottvince"
					/>
					<p>
						This has been a lot of fun. I'm learning new stuff and hope to keep going!
						As I'm writing this, I'm planning to change my blog's background colors. 
						They're aqua and yellow so it's very high contrast lol.
					</p>
					<img className="screenshot" src="./blog-content/high-contrast.png"/>
					<h2>Changing the Colors</h2>
					<p>
						Okay, so I did some digging around on Coolors, and I really liked the first one I saw.
						Here are the colors: #1b264f, #274690, #576CA8, #302B27, and #F5F3F5. Fun fact: Even though this is inside a p tag,
						VS code shows me the colors in little squares. Cute!
					</p>
					
				</article>
			</section>
		</div>
		
	);
}

