import { 
    createStore, 
    applyMiddleware, 
    combineReducers, 
    compose 
} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/Users';
import postsReducer from './reducers/Posts';
import { loadState } from './localStorage';

const rootReducer = combineReducers({
    userData : userReducer,
    posts : postsReducer
});
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

export default createStore(
    rootReducer,
    persistedState,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);