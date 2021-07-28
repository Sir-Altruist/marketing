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
import snap from './snapScroll'
import board from './board'
import chat from './chat'
import footer from './footer'
import order from './order'
import { productReducers } from './productReducers'
import { clientLoginReducer } from './clientReducer'


export default combineReducers({
    services,
    featured,
    testimonials,
    servicePage,
    choose,
    productReducers,
    products,
    affiliate,
    buyer,
    image,
    snap,
    board,
    chat,
    footer,
    order,
    clientLoginReducer
});