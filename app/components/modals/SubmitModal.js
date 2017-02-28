import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import { closeModal } from '../../actions/actions'

const styles = {
  closeBtnSt: { 
    float: 'right',
  }
}

const SubmitModal = (props) => {
  const open = (props.modalType === 'SUBMIT') ? true : false;
  return (
    <ReactModal
      isOpen={open}
      contentLabel="Minimal Example Modal"
    >
    <Button 
      style={styles.closeBtnSt}
      onClick={() => props.dispatch(closeModal())}
      >X</Button>
    <div>Testing, testing...</div>
    </ReactModal>
  )
}

export default connect(state => state.modal)(SubmitModal);