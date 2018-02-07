import React, { Component } from 'react';
import './App.css';
import { Home } from "./home/HomeView";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Header} from "./common/Header";
import {NotFound} from "./common/NotFound";
import {Footer} from "./common/Footer";
import {Posts} from "./post/Posts";


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/posts" component={Posts}/>
                    <Route component={NotFound} />
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;



