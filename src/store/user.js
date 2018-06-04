import {observable, action} from 'mobx';

export default class User{
    @observable
    times = 0

    @action
    clickBtn(){
        this.times++;
    }
}