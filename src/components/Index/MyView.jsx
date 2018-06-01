import React, {Component} from 'react';

export default class MyView extends Component{
    render(){
        return (
            <div className="my-view">
                It is index page childe component:
                {this.props.total}
            </div>
        );
    }
}