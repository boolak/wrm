import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import MyView from './MyView';
import userImg from '../../static/images/per.png';
import './style';

@inject('user')
@observer
export default class Index extends Component{
    
    render(){
        const {user} = this.props;
        return (
            <div className="index-page">
                我是index页面,button click times: {user.times}
                <button onClick={()=>{user.clickBtn();}}>click me</button> 
                <MyView total={user.times}/>
                <img src={userImg} alt=""/>
            </div>
        );
    }

}