import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {
    Route,
    Switch,
    HashRouter
} from "react-router-dom";

import './assets/scss/style.scss';

// pages for this product
import ProjectGreen from "./views/project-green/projectgreen.jsx";
import SignInComponent from "./components/sign-in.component/sign-in.component";
import Header from './components/header/header';
import Footer from './components/footer/footer';

//auth
import { auth } from './firebase/firebase.utils';



class App extends React.Component { 
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });

            console.log(user)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
        <div>
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <Switch>
            <Route path="/signin" component={SignInComponent} />
            <Route path="/" component={ProjectGreen} />
        </Switch>
        </div>
        <div style={{marginTop: 'auto'}}>
        <Footer currentUser={this.state.currentUser}/>
        </div>
        </div>
        )
    }
}

export default App;