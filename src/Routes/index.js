import { Route, Switch } from "react-router";
import Homepage from "../components/Homepage/Homepage";





const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={(props) =>  <Homepage {...props} /> } />
            {/* <Route path="/about" exact render={(props) =>  <Homepage {...props} /> } /> */}

        </Switch>
    )
}

export default Routes