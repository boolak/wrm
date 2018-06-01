import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'mobx-react';
import Frame from '../layout/Frame/Frame';
import Home from '../components/Index/Index';
import User from '../components/User/User';

export default class Root extends Component{
    render(){
        return(
            <Provider {...this.props}>
                <div>
                    <Route path="/" component={Frame}/>
                    <Route path="/index" component={Home}/>
                    <Route path="/user" component={User}/>
                </div>
            </Provider>
        );
    }
}