import React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { Button } from 'react-bootstrap';
import { closeModal } from '../../actions/actions'
import CustomModal from './CustomModal'


const PreviewModal = (props) => {
    return (
      <CustomModal>
        <div>Author: {props.author}</div>
        <div> Title: {props.title}</div>
         <div>Subtitle: {props.subtitle}</div>
         <div>Content: {props.content}</div>
      </CustomModal>
    )
}

export default connect(state => state.modal)(PreviewModal);