import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Rooter from './routes/Root';
import './static/style/global.css';

render(
    <BrowserRouter>
        <Rooter/>
    </BrowserRouter>,
    document.getElementById('app')
);

// class Test{
//     constructor(name){
//         this.name = name;
//     }
//     call(){
//         alert(this.name)
//     }
// }
// new Test('yoto是是是').call();