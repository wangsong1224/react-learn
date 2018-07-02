import dva from 'dva';
import './index.css';
import router from './routes/router'
import Products from './models/products'
import { asEffect } from 'redux-saga/utils';

// 1. Initialize
const app = dva({
    initialState: {
        products: [
            {
                name: 'dva',
                id: 1
            }, {
                name: 'antd',
                id: 2
            }
        ]
    }
});

// 2. Plugins app.use({});

// 3. Model
// app.model(require('./models/products').default);
app.model(Products);


// 4. Router app.router(require('./routes/router').default);
app.router(router);

// 5. Start
app.start('#root');

