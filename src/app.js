import React from "react";
import {
    Route,
    Switch
} from "react-router-dom";

import './assets/scss/style.scss';

// pages for this product
import ProjectGreen from "./views/project-green/projectgreen.jsx";
import LoginComponent from "./views/project-green/sections/login";
import Footer from './components/footer/footer';

//auth
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component { 
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser:{
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });

                    console.log(this.state)
                });
            }
            this.setState({ currentUser: userAuth });
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
            <Route path="/signin" component={LoginComponent} />
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