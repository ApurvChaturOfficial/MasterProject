import { combineReducers } from 'redux'

import AuthLayoutState from '../eLayout/aAuthLayout/extra/State';
import ContentLayoutState from '../eLayout/bContentLayout/extra/State';
import GlobalLayoutState from '../eLayout/cGlobalLayout/extra/State';


const RootReducer = combineReducers({
    AuthLayoutState,
    ContentLayoutState,
    GlobalLayoutState,

    
})  

export default RootReducer;
