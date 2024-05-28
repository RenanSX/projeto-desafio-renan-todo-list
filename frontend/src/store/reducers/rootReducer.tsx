import { combineReducers } from 'redux'
import items from '@/store/reducers/items'
import filterState from '@/store/reducers/filter'

const rootReducer = combineReducers({
  items,
  filterState
})

export default rootReducer
