import {
  WATCH_SWITCH,
  CURRENT_WATCH_TIME,
  WATCH_START_INITALIZE,
  WATCH_RUNNING,
  INITIAL_STAGE
} from '../utils/constants'
import initialState from '../initialState'
/**
 * timerState
 * This is for handling the watch switch, current watch time, watch time initialzing & etc with the redux
 *
 * @param {object} state - Default is initial object where all states are stored
 * @param {object} action - Object about type and payload
 *
 *
 * @example
 *
 *    timerState(state, action)
 */
const timerState = (state = initialState, action) => {
  switch (action.type) {
    case WATCH_SWITCH:
      return {
        ...state,
        watchSwitch: !state.watchSwitch
      }
    case CURRENT_WATCH_TIME:
      return {
        ...state,
        watchTime: state.watchTime
      }
    case WATCH_START_INITALIZE:
      return {
        ...state,
        watchStart: Date.now() - state.watchTime
      }
    case WATCH_RUNNING:
      return {
        ...state,
        watchTime: Date.now() - state.watchStart
      }
    case INITIAL_STAGE:
      return initialState
    default:
      return state
  }
}

export { timerState }
