/**
 * Created by ljunb on 16/5/25.
 * 根reducer
 */
import {
	combineReducers
} from 'redux';
import Strolling from './strollingReducer';
import Foods from './foodsReducer';
import User from './userReducer';
import Search from './searchReducer';
import FoodsList from './foodsListReducer';
import FoodInfo from './foodInfoReducer';

export default rootReducer = combineReducers({
	Strolling,
	User,
	Foods,
	Search,
	FoodsList,
	FoodInfo
})
