import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import validate from '../utilities/reportFormValidator'
import { InputGroup } from 'react-bootstrap';

const formStyles = {
  width: '150px'
}

const renderField = ({ input, label, type, meta: { touched, error } }) =>
  <div>
    <label> {label} </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>


const Form = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form style={formStyles} onSubmit={handleSubmit}>
      <Field name="title" component={renderField} type="text" placeholder='Title' />
      <Field name="content" component={renderField} type="text" placeholder='Content' />
      <Field name="subtitle" component={renderField} type="text" placeholder='Subtitle' />
      <Field name="author" component={renderField} type="text" placeholder='Author' />
      <Button style={{margin: '10px 0px 10px 10px', float: 'right'}} bsSize='small' bsStyle='success' type="submit">Submit me</Button>
    </form>
  )
}

export default reduxForm({
  form: 'createReport',
  validate
})(Form);