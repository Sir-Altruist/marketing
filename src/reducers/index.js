import { combineReducers } from 'redux';
import services from './service'
import featured from './featured'
import testimonials from './testimonials'
import servicePage from './servicePage';

export default combineReducers({
    services,
    featured,
    testimonials,
    servicePage
});