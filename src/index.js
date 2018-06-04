import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Rooter from './routes/Root';
import './static/style/global.css';
import appStore from './store/appStore.js';

const store = new appStore();
render(
    <BrowserRouter forceRefresh={false}>
        <Rooter {...store}/>
    </BrowserRouter>,
    document.getElementById('app')
);
