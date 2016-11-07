import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import { loginValidation } from '../validation'

const renderField = (field) => {
  return (
    <div>
      <input {...field.input} type={field.type} />
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
          type='text'
          component={renderField} />
      </div>
      <div>
        <Field name='password'
          component={renderField} />
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
