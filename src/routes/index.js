import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import PetForm from "../pages/petForm";
import CaseForm from "../pages/caseForm";

const Routes = () => {
	return (
		<BrowserRouter>
				<Switch>
						<Route path="/"  exact component={Home}/>
						<Route path="/home" component={Home}/>
						<Route path="/petForm" component={PetForm}/>
						<Route path="/caseForm" component={CaseForm}/>
				</Switch>
		</BrowserRouter>
	)
}

export default Routes;