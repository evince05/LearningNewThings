/*
Per React docs: A component is a Javascript function that you can sprinkle
with markup (HTML). https://react.dev/learn/your-first-component
 */

import { useState } from "react";

// export default marks something as the main function in a file
// we can leave off the "default" if we have multiple component definitions in the file.
// using a mix of both is possible and sometimes beneficial.

// must start with capital letter for react components
export default function FlipCard({number}) {

	// for mananging which side to show.
	const [showNum, setShowNum] = useState(false);

	return (
		<div className="card" onClick={(e) => setShowNum(!showNum)}>
			{
				// You can use full JS syntax (if-else, etc.) in the functions (or just above the return () JSX code)
				// Inside JSX, use this instead.
				showNum ?  <h2>{number}</h2> : <h2>Click to Flip</h2>
			}
		</div>	
	);
}