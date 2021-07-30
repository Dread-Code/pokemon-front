import React from 'react'
import { Modal } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './ModalBasic.scss'

const ModalBasic = ({ show, setShow, title, children }) => {
  const onClose = () => {
    setShow(false)
  }

  return (
    <Modal size="mini" open={show} onClose={onClose} className="modal-basic">
      {title && <Modal.Header>{title}</Modal.Header>}
      {children}
    </Modal>
  )
}

ModalBasic.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default ModalBasic
