import {Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import Frame from '../layout/Frame/Frame';
import Home from '../components/Index/Index';
import User from '../components/User/User';

export default class Root extends Component{
    render(){
        return(
            <div>
                <Route path={`/`} component={Frame}/>
                <Route path="/index" component={Home}/>
                <Route path="/user" component={User}/>
            </div>
        )
    }
}