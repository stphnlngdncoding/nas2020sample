import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { closeModal } from '../../actions/actions'

const CustomModal = (props) => {
  return (
  <ReactModal
    isOpen={true}
    contentLabel="customModal"
    {...props}
  >
  <Button 
    style={{float: 'right'}}
    onClick={()=>props.dispatch(closeModal())}
    >x</Button>   
    {props.children}
  </ReactModal>
  )
}

export default connect(state => state.props || {})(CustomModal);