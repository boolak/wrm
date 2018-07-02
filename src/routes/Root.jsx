import React, {Component} from 'react';
import {Route, Router, Redirect, Switch} from 'react-router-dom';
import {Provider} from 'mobx-react';
import Frame from '../layout/Frame/Frame';
import Home from '../components/Index/Index';
import User from '../components/User/User';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

export default class Root extends Component{
    render(){
        return(
            <Provider {...this.props}>
                <div>
                    <Route component={Frame}/>
                    <Route path="/" component={Index}/>
                </div>
            </Provider>
        );
    }
}

class Index extends Component{
    UNSAFE_componentWillReceiveProps(nextProps, nextState){
        window.scrollTo(0, 0);
    }
    render(){
        return (
            <div>
                <Switch>
                    <Redirect path="/" exact to={{pathname: '/index'}}/>
                    <Route path="/index/:name" component={Home}/>
                    <Route path="/user" component={User}/>
                </Switch>
            </div>
        );
    }
}