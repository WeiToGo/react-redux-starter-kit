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

  if (values.phone) {
    const atLeastSevenDigits = (values.phone.replace(/[^0-9]/g, '').length) >= 7
    const isPhone = /^[0-9+()#.\s/a-zA-Z-]+$/.test(values.phone)
    if (!atLeastSevenDigits || !isPhone) {
      errors.phone = 'Invalid phone number'
    }
  }
  return errors
}

const SignUpForm = (props) => {
  return (
    <form onSubmit={props.signUp}>
      <div>
        <Field name='name' component={TextField} />
      </div>
      <div>
        <Field name='email' component={TextField} />
      </div>
      <div>
        <Field name='phone' component={TextField} />
      </div>
      <div>
        <Field name='address' component={TextField} />
      </div>
      <div>
        <button type='submit' disabled={props.creatingAccount}>Submit</button>
      </div>
    </form>
  )
}

SignUpForm.propTypes = {
  signUp     : PropTypes.func.isRequired,
  creatingAccount: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'SignUpForm',
  validate  // a unique identifier for this form
})(SignUpForm)
