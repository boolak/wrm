import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import MyView from './MyView';
import userImg from '../../static/images/per.png';
import './style';

@inject('store')
@observer
export default class Index extends Component{
    
    render(){
        const {store} = this.props;
        return (
            <div className="index-page">
                我是index页面,button click times: {store.total}
                <button onClick={()=>{store.clickButton();}}>click me</button> 
                <MyView total={store.total}/>
                <img src={userImg} alt=""/>
            </div>
        );
    }

}