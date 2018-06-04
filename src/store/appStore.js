import User from './user';

export default class AppStore{
    constructor(){
        this.user = new User();
    }
}