import { INITIAL_STAGE, DELETE_MARKER, ADD_MARKER } from '../utils/constants'
import initialState from '../initialState'
import uuid from 'uuid/v4'
/**
 * markerState
 * This is for handling the marker adding, deleting with the redux
 *
 * @param {object} state - Default is initial object where all states are stored
 * @param {object} action - Object about type and payload
 *
 *
 * @example
 *
 *    markerState(state, action)
 */
const markerState = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MARKER:
      return {
        ...state,
        marker: state.marker.filter(marker => marker.id !== action.payload)
      }
    case ADD_MARKER:
      return {
        ...state,
        marker: [
          ...state.marker,
          {
            id: uuid(),
            time: action.payload.time,
            note: action.payload.note
          }
        ]
      }

    case INITIAL_STAGE:
      return initialState
    default:
      return state
  }
}

export { markerState }
