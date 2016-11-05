import { connect } from 'react-redux'
import { signUp, login } from '../modules/user'

import User from '../components/User'

const mapDispatchToProps = {
  signUp,
  login
}

const mapStateToProps = (state) => ({
  user : state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
