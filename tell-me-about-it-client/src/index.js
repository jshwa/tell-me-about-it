import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { saveState } from './localStorage';
import throttle from 'lodash/throttle';

store.subscribe(throttle(() => {
   saveState({ userData: store.getState().userData });
}, 3000));

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>, 
document.getElementById('root'));

registerServiceWorker();
