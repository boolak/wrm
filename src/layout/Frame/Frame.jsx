import React, {Component} from 'react';
import Header from '../Header/Header';
import LeftMenu from '../LeftMenu/LeftMenu';
import './Frame.scss';

export default class Frame extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="frame">
                <Header/>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
