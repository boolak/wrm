import {action, observable} from 'mobx';

export default class AppStore{
    @observable total = 0;

    @action clickButton(){
        this.total += 1;
    }
}