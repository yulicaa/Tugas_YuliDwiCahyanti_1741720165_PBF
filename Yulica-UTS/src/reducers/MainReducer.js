import { combineReducers } from 'redux' 
import todos from './TodoReducer' 
import visibilityFilter from './Filterreducer' 
 
export default combineReducers({   
    todos,   
    visibilityFilter 
}) 