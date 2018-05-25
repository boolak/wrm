import React from 'react';
import {render} from 'react-dom';

render(<li>xxxx</li>, document.getElementById('app'));

class Test{
    constructor(name){
        this.name = name;
    }
    call(){
        alert(this.name)
    }
}
new Test('yoto~~~~').call();