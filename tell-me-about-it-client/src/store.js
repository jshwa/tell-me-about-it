import { 
    createStore, 
    applyMiddleware, 
    combineReducers, 
    compose 
} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/Users'
import githubReducer from './reducers/Github'

const rootReducer = combineReducers({
    userData : userReducer,
    github : githubReducer
});
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);