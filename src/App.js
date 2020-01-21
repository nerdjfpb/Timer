import React from 'react'
import Stopwatch from './components/Stopwatch'
import MarkerList from './components/MarkerList'
import { Row, Col } from 'antd'
import './App.css'

/**
 * App()
 * This is the main function where the layout done for the app
 *
 * @return {reactElement} for the app layout
 *
 * @example
 *
 *    import App from 'location'
 */
function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <Row>
        <Col span={24}>
          <Stopwatch />
          <MarkerList />
        </Col>
      </Row>
    </div>
  )
}

export default App
