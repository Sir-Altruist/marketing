import { combineReducers } from 'redux';
import services from './service'
import featured from './featured'
import testimonials from './testimonials'
import servicePage from './servicePage';
import choose from './choose'
import products from './product'
import affiliate from './affiliate'
import buyer from './buyer'
import image from './image'


export default combineReducers({
    services,
    featured,
    testimonials,
    servicePage,
    choose,
    products,
    affiliate,
    buyer,
    image
});