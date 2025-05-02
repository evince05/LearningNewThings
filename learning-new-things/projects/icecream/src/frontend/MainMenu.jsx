import { useNavigate } from "react-router-dom"

const MainMenu = () => {

	const navigate = useNavigate(); // note: need to define routes via BrowserRouter first.
	return (
		<div>
			<h1>Elliott's Ice Cream Shop</h1>
			<button id="ordersBtn" onClick={() => navigate("/order")}>Place an Order</button>
			<button id="adminBtn" onClick={() => navigate("/admin")}>Admin Panel</button>
		</div>
	);
}
 
export default MainMenu;