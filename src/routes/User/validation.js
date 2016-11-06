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
  const requiredFields = [ 'email', 'password', 'phone', 'address' ]
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

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const asyncValidate = (values) => {
  return sleep(1000) // simulate server latency
    .then(() => {
      if ([ 'a@mail.ca', 'b@mail.ca', 'c@mail.ca', 'd@mail.ca' ].includes(values.username)) {
        return { username: 'That username is taken' }
      }
    })
}
