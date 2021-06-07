import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Navbar from "./components/navbar";

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<div className="container pt-4">
				<Switch>
					<Route path={"/"} exact component={Home}></Route>
					<Route path={"/"} component={About}></Route>
				</Switch>
				<h2></h2>
			</div>
		</BrowserRouter>
	);
}

export default App;
