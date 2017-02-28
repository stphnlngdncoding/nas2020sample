import React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { Button } from 'react-bootstrap';
import { closeModal } from '../../actions/actions'
import CustomModal from './CustomModal'


const PreviewModal = (props) => {
    return (
      <CustomModal onAfterOpen={()=>alert("on after open called")}>
        This is the stuff in between the custom modal tags inside preview modal!
      </CustomModal>
    )
}

export default connect(state => state.modal)(PreviewModal);