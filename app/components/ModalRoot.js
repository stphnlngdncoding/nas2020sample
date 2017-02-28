import React from 'react'
import SubmitModal from './modals/SubmitModal';
import PreviewModal from './modals/PreviewModal';
import Modal from './modals/CustomModal';
import { connect } from 'react-redux';

const MODAL_COMPONENTS = {
  'SUBMIT': SubmitModal,
  'PREVIEW': PreviewModal
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return <span />
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal modalType={modalType} {...modalProps} />
}

export default connect(state => state.modal)(ModalRoot)