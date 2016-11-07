import {
  LOGIN,
  SIGNUP,
  signUp,
  logIn,
  default as userReducer
} from 'routes/User/modules/user'

describe('(Redux Module) User', () => {
  it('Should export a constant LOGIN.', () => {
    expect(LOGIN).to.equal('LOGIN')
  })
  it('Should export a constant SIGNUP.', () => {
    expect(SIGNUP).to.equal('SIGNUP')
  })
  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(userReducer).to.be.a('function')
    })

    const initialState = {
      loggedIn: false,
      loggingIn: false,
      creatingAccount: false,
      createdAccount: false
    }
    it('Should initialize with the correct state.', () => {
      expect(userReducer(undefined, {})).to.deep.equal(initialState)
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = userReducer(undefined, {})
      expect(state).to.deep.equal(initialState)
      state = userReducer(state, { type: '@@@@@@@' })
      expect(state).to.deep.equal(initialState)
      state = userReducer(state, logIn('email', 'pass'))
      expect(state).to.deep.equal({
        loggedIn: false,
        loggingIn: true,
        creatingAccount: false,
        createdAccount: false
      })
      state = userReducer(state, { type: '@@@@@@@' })
      expect(state).to.deep.equal({
        loggedIn: false,
        loggingIn: true,
        creatingAccount: false,
        createdAccount: false
      })
    })
  })
})
