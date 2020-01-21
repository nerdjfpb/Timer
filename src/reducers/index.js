import { combineReducers } from 'redux'
import { timerState } from './timer'
import { markerState } from './marking'

const allReducers = combineReducers({
  timerState,
  markerState
})

export default allReducers
