import {
  WATCH_SWITCH,
  CURRENT_WATCH_TIME,
  WATCH_START_INITALIZE,
  WATCH_RUNNING,
  INITIAL_STAGE,
  DELETE_MARKER,
  ADD_MARKER
} from '../utils/constants'

/**
 * This is a action function.
 *
 * @return {Object} contain type
 *
 * @example
 *
 *     watchSwitchToggle()
 */
const watchSwitchToggle = () => ({
  type: WATCH_SWITCH
})

/**
 * This is a action function.
 *
 * @return {Object} contain type
 *
 * @example
 *
 *     currentWatchTime()
 */
const currentWatchTime = () => ({
  type: CURRENT_WATCH_TIME
})

/**
 * This is a action function.
 *
 * @return {Object} contain type
 *
 * @example
 *
 *     watchStartInitial()
 */
const watchStartInitial = () => ({
  type: WATCH_START_INITALIZE
})

/**
 * This is a action function.
 *
 * @return {Object} contain type
 *
 * @example
 *
 *     watchRunning()
 */
const watchRunning = () => ({
  type: WATCH_RUNNING
})

/**
 * This is a action function with payload.
 *
 * @return {Object} contain type & payload
 *
 * @param {string} payload - A uuid()
 *
 * @example
 *
 *     markerDelete()
 */
const markerDelete = payload => ({
  type: DELETE_MARKER,
  payload
})

/**
 * This is a action function with payload.
 *
 * @return {Object} contain type & payload
 *
 * @param {object} payload - an object with time & note
 *
 * @example
 *
 *     markerAdd()
 */
const markerAdd = payload => ({
  type: ADD_MARKER,
  payload
})

/**
 * This is a action function.
 *
 * @return {Object} contain type
 *
 * @example
 *
 *     initialStage()
 */
const initialStage = () => ({
  type: INITIAL_STAGE
})

export {
  watchSwitchToggle,
  currentWatchTime,
  watchStartInitial,
  watchRunning,
  initialStage,
  markerDelete,
  markerAdd
}
