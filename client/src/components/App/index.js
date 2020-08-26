import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

/* Components */

import Contact from "../Contact";
import Terms from "../Terms";

/* Styles */
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./app.scss";

/* Containers */
import Signup from "../../containers/Signup";
import Login from "../../containers/Login";
import Admin from "../../containers/Admin/Index";
import Profil from "../../containers/User/Profil";
import EditProfil from "../../containers/User/EditProfil";
import IrecordsPage from "../../containers/IrecordsPage";
import IusersPage from "../../containers/IusersPage";
import Search from "../../containers/Search";
import Feed from "../../containers/Feed";
import Home from "../../containers/Home";

const App = ({ isLogged }) => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    path="/signup"
                    render={() => (isLogged ? <Redirect to="/feed" /> : <Signup />)}
                />
                <Route
                    path="/login"
                    render={() => (isLogged ? <Redirect to="/feed" /> : <Login />)}
                />
                <Route path="/search" component={Search} />
                <Route path="/irecords" component={IrecordsPage} />
                <Route path="/users" component={IusersPage} />
                <Route exact path="/user/:slug" component={Profil} />
                <Route exact path="/contact" component={Contact} />
                <Route
                    exact
                    path="/user/:slug/edit"
                    render={() => (isLogged ? <EditProfil /> : <Redirect to="/login" />)}
                />
                <Route exact path="/feed" component={Feed} />
                <Route path="/admin" component={Admin} />
                <Route exact path="/terms" component={Terms} />
                <Route>
                    <h1>La page n'existe pas</h1>
                </Route>
            </Switch>
        </div>
    );
};
export default App;
