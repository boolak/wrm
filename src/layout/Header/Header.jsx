import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
 
export default class Header extends Component{
    render(){
        return (
            <div className="header">
                <p>菜单：</p>
                <Link to="/index">index</Link>
                <Link to="/user">user</Link>
            </div>
        )
    }
}