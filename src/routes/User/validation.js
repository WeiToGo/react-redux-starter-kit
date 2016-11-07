export const loginValidation = values => {
  const errors = {}
  const requiredFields = [ 'email', 'password' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  return errors
}

export const signUpValidation = values => {
  const errors = {}
  const requiredFields = [ 'email', 'phone', 'address', 'password', 'passwordConfirm' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })

  const { email, password, passwordConfirm } = values
  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address'
  }

  if (password) {
    const atLeastEightDigits = password.length >= 8
    const atLeastOneNumber = /\d{1}/.test(password)
    const atLeastOneLetter = /[A-Z]{1}/i.test(password)
    if (!atLeastEightDigits || !atLeastOneNumber || !atLeastOneLetter) {
      errors.phone = 'Password has to be at least 8 characters long and contains at least 1 letter and 1 number.'
    }
  }

  if (passwordConfirm && password) {
    if (password !== passwordConfirm) {
      errors.passwordConfirm = 'Confirm password is not the same than password.'
    }
  }

  return errors
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const asyncValidate = (values) => {
  return sleep(1000) // simulate server latency
    .then(() => {
      if ([ 'a@mail.ca', 'b@mail.ca', 'c@mail.ca', 'd@mail.ca' ].includes(values.email)) {
        throw { email: 'That username is taken' }
      }
    })
}
