import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Redux/reducer/GlobalReducer';



// store
const storeRedux = createStore(rootReducer);



ReactDOM.render( < Provider store = { storeRedux } > < Home / > < /Provider>, document.getElementById('root'));