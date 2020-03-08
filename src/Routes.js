import React from "react";
import s from "./app.module.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Home from "./components/home/HomeContainer";
import SecuredRoutes from "./SecuredRoutes";
import LoginComponent from "./components/login/LoginContainer";
import LoaderContainer from "./components/common/loader/LoaderContainer";
import GenericPopupContainer from "./components/common/genericPopup/GenericPopupContainer";
import RegisterContainer from "./components/register/RegisterContainer";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div className={s.appShell}>
                    <Header />
                    <div className={s.appContainer}>
                        <Switch>
                            <Route exact path="/login">
                                <LoginComponent/>
                            </Route>
                            <Route exact path="/register">
                                <RegisterContainer/>
                            </Route>
                            <SecuredRoutes>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                            </SecuredRoutes>

                        </Switch>
                    </div>
                    <Footer />
                    <LoaderContainer/>
                    <GenericPopupContainer/>
                </div>
            </Router>
        )
    }
}

export default Routes;