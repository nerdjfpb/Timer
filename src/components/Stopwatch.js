import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  watchSwitchToggle,
  currentWatchTime,
  watchStartInitial,
  watchRunning,
  markerAdd,
  initialStage
} from '../actions'
import MarkerModel from './MarkerModal'
import { Button, Icon } from 'antd'
import './Stopwatch.css'

/**
 * Stopwatch Component
 * This is a stateless component using hooks and redux.
 *
 *
 * @return {reactElement} - marker modal
 *
 * @example
 *
 *     import Stopwatch from 'location'
 */
export default () => {
  /**
   * startWatch
   * This is an arrow function.
   *
   *
   * @example
   *
   *     startWatch()
   */
  const startWatch = () => {
    dispatch(watchSwitchToggle())
    dispatch(currentWatchTime())
    dispatch(watchStartInitial())

    setInterval(() => {
      dispatch(watchRunning())
    }, 10)
  }
  /**
   * pauseWatch
   * This is an arrow function.
   *
   *
   * @example
   *
   *     pauseWatch()
   */
  const pauseWatch = () => {
    dispatch(watchSwitchToggle())
    for (var i = 1; i < 99999; i++) window.clearInterval(i)
  }
  /**
   * resetWatch
   * This is an arrow function.
   *
   *
   * @example
   *
   *     resetWatch()
   */
  const resetWatch = () => {
    dispatch(initialStage())
  }
  /**
   * markTime
   * This is an arrow function.
   *
   *
   * @example
   *
   *     markTime()
   */
  const markTime = () => {
    setVisible(true)
    const time = hours + ': ' + minutes + ': ' + seconds + ': ' + centiseconds
    setStoreTime(time)
  }
  /**
   * addMarkTime
   * This is an arrow function.
   *
   *
   * @example
   *
   *     addMarkTime()
   */
  const addMarkTime = () => {
    if (markNote.trim() === '') return
    const payload = {
      time: storeTime,
      note: markNote
    }
    dispatch(markerAdd(payload))
    setMarkNote('')
    setVisible(false)
  }
  /**
   * handleCancel
   * This is an arrow function.
   *
   *
   * @example
   *
   *     handleCancel()
   */
  const handleCancel = () => {
    setVisible(false)
  }
  /**
   * onChange
   * This is an arrow function.
   *
   *
   * @example
   *
   *     onChange()
   */
  const onChange = event => {
    setMarkNote(event.target.value)
  }
  const watchSwitch = useSelector(state => state.timerState.watchSwitch)
  const watchTime = useSelector(state => state.timerState.watchTime)
  const dispatch = useDispatch()
  let centiseconds = ('0' + (Math.floor(watchTime / 10) % 100)).slice(-2)
  let seconds = ('0' + (Math.floor(watchTime / 1000) % 60)).slice(-2)
  let minutes = ('0' + (Math.floor(watchTime / 60000) % 60)).slice(-2)
  let hours = ('0' + Math.floor(watchTime / 3600000)).slice(-2)
  const [visible, setVisible] = useState(false)
  const [markNote, setMarkNote] = useState('')
  const [storeTime, setStoreTime] = useState('')
  return (
    <div className="stopwatch">
      <div className="stopwatch-time">
        {hours} : {minutes} : {seconds} : {centiseconds}
      </div>
      {watchSwitch === false && watchTime === 0 && (
        <Button type="default" onClick={startWatch}>
          Start <Icon type="clock-circle" theme="filled" />
        </Button>
      )}
      {watchSwitch === true && (
        <React.Fragment>
          <Button type="danger" onClick={pauseWatch}>
            Pause <Icon type="pause-circle" theme="filled" />
          </Button>
          <Button type="default" onClick={markTime}>
            Mark <Icon type="book" theme="filled" />
          </Button>
          <MarkerModel
            storeTime={storeTime}
            visible={visible}
            addMarkTime={addMarkTime}
            handleCancel={handleCancel}
            onChange={onChange}
            markNote={markNote}
          />
        </React.Fragment>
      )}
      {watchSwitch === false && watchTime > 0 && (
        <Button type="primary" onClick={startWatch}>
          Resume <Icon type="play-circle" theme="filled" />
        </Button>
      )}
      {watchSwitch === false && watchTime > 0 && (
        <Button type="danger" onClick={resetWatch}>
          Reset <Icon type="reload" />
        </Button>
      )}
    </div>
  )
}
