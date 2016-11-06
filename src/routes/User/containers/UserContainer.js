import { connect } from 'react-redux'
import { signUp, logIn } from '../modules/user'

import User from '../components/User'

const mapDispatchToProps = {
  signUp,
  logIn
}

const mapStateToProps = (state) => ({
  createdAccount : state.user.createdAccount,
  creatingAccount: state.user.creatingAccount,
  loggingIn: state.user.loggingIn,
  loggedIn: state.user.loggedIn
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
