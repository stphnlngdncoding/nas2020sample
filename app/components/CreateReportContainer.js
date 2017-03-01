import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReport } from '../actions/actions'
import Form from './Form'
import { Button } from 'react-bootstrap'
import { openModal } from '../actions/actions'

const styles = {
  inputSt: {
    margin: '10px 10px 10px 10px',
    display: 'block'
  },
  buttonSt: {
    margin: '10px 10px 10px 10px'
  }
}

export class CreateReportContainer extends Component {
  constructor(props) {
    super(props);
    // this.handleTitleChange = this.handleTitleChange.bind(this);
    // this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
    // this.handleContentChange = this.handleContentChange.bind(this);
    // this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.testModalDispatch = this.testModalDispatch.bind(this);
  }
  handleSubmit(obj) {
    console.log("this is the thing passed in to handle submit in the form", obj)
     fetch('http://localhost:3000/report', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
  }
  testModalDispatch() {
    this.props.dispatch(openModal("SUBMIT"))
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} />
        <Button onClick={this.testModalDispatch}>Click me!</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state}
}


export default connect(mapStateToProps)(CreateReportContainer);