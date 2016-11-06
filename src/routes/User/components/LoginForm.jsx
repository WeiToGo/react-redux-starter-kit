import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'name', 'email', 'phone', 'address' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (values.password) {
    const atLeastEightDigits = values.password.length >= 8
    const atLeastOneNumber = /\d{1}/.test(values.password)
    const atLeastOneLetter = /[A-Z]{1}/i.test(values.password)
    if (!atLeastEightDigits || !atLeastOneNumber || !atLeastOneLetter) {
      errors.phone = 'Password has to be at least 8 characters long and contains at least 1 letter and 1 number.'
    }
  }
  return errors
}

const LoginForm = (props) => {
  console.log('loginForm ', props)
  return (
    <form onSubmit={props.login}>
      <div>
        <Field name='email' component={TextField} />
      </div>
      <div>
        <Field name='password' component={TextField} />
      </div>
      <div>
        <button type='submit' disabled={props.loggingIn}>Submit</button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  login     : PropTypes.func.isRequired,
  loggingIn: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'LoginForm',
  validate  // a unique identifier for this form
})(LoginForm)
