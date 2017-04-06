import { combineReducers } from 'redux'
import { issuesReducer } from './issues'

export default combineReducers({
  issues: issuesReducer
})
