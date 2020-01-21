import React from 'react'
import { Modal, Form, Input } from 'antd'

/**
 * MarkerModal Component
 * This is a stateless component using hooks and redux.
 *
 * @param {object} props - A object contain different data
 *
 * @return {reactElement} - marker modal
 *
 * @example
 *
 *     import MarkerModal from 'location'
 */

export default props => {
  const {
    storeTime,
    visible,
    addMarkTime,
    handleCancel,
    onChange,
    markNote
  } = props
  return (
    <Modal
      title={`Mark Time - ${storeTime}`}
      visible={visible}
      onOk={addMarkTime}
      onCancel={handleCancel}
    >
      <Form layout="vertical">
        <Form.Item label="Note">
          <Input
            placeholder="Enter Tour Note"
            onChange={onChange}
            value={markNote}
            required
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}
