import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import { signUpValidation, asyncValidate } from '../validation'

const renderField = (field) => {
  return (
    <div>
      <input {...field.input} placeholder={field.label} type={field.type} />
      {field.meta.touched && field.meta.error &&
      <span>{field.meta.error}</span>}
    </div>
  )
}

const SignUpForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='email' label='email' type='text' component={renderField} />
      </div>
      <div>
        <Field name='phone' label='phone' type='text' component={renderField} />
      </div>
      <div>
        <Field name='address' label='address' type='text' component={renderField} />
      </div>
      <div>
        <Field name='password' label='password' type='password' component={renderField} />
      </div>
      <div>
        <Field name='passwordConfirm' label='confirm password' type='password' component={renderField} />
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'signUp',
  validate: signUpValidation,  // a unique identifier for this form
  asyncValidate
})(SignUpForm)
