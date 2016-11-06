import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import { loginValidation } from '../validation'

const renderTextField = (field) => {
  return (
    <div>
      <input {...field.input} type='text' />
      {field.meta.touched && field.meta.error &&
      <span>{field.meta.error}</span>}
    </div>
  )
}

const renderPasswordField = (field) => {
  return (
    <div>
      <input {...field.input} type='password' />
      {field.meta.touched && field.meta.error &&
      <span>{field.meta.error}</span>}
    </div>
  )
}

const LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name='email'
          component={renderTextField} />
      </div>
      <div>
        <Field name='password'
          component={renderPasswordField} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

LoginForm.propTypes = {
  handleSubmit     : PropTypes.func.isRequired
}

export default reduxForm({
  form: 'login',  // a unique identifier for this form
  validate: loginValidation
})(LoginForm)
