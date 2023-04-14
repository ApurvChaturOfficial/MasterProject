import { combineReducers } from 'redux'

import LandingState from '../fPage/aLanding/extra/State';
import PortfolioListState from '../fPage/bPortfolio/aList/extra/State';
import PortfolioRetrieveState from '../fPage/bPortfolio/bRetrieve/extra/State';
import EventListState from '../fPage/cEvent/aList/extra/State';
import EventRetrieveState from '../fPage/cEvent/bRetrieve/extra/State';
import BlogListState from '../fPage/dBlog/aList/extra/State';
import BlogRetrieveState from '../fPage/dBlog/bRetrieve/extra/State';

const RootReducer = combineReducers({
    LandingState,
    
    PortfolioListState,
    PortfolioRetrieveState,
    
    EventListState,
    EventRetrieveState,
    
    BlogListState,
    BlogRetrieveState,
})  

export default RootReducer;
