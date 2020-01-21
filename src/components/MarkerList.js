import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { markerDelete } from '../actions'
import { Table, Tag } from 'antd'
import './MarkerList.css'

/**
 * MarkerList Component
 * This is a stateless component using hooks and redux.
 *
 * @return {reactElement} - markerlist div
 *
 * @example
 *
 *     import MarkerList from 'location'
 */

export default () => {
  const markerList = useSelector(state => state.markerState.marker)
  const dispatch = useDispatch()
  const columns = [
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time'
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note'
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'id',
      render: id => (
        <span>
          <Tag color={'red'} onClick={() => dispatch(markerDelete(id))}>
            Delete
          </Tag>
        </span>
      )
    }
  ]

  return (
    <div className="markerList">
      {markerList.length > 0 ? (
        <Table dataSource={markerList} columns={columns} />
      ) : null}
    </div>
  )
}
