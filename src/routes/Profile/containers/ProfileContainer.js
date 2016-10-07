import { connect } from 'react-redux'
import { postMessage } from '../modules/profile'


import Profile from '../components/Profile'

const mapDispatchToProps = {
  postMessage,
}

const mapStateToProps = (state) => ({
  posts : state.profile
})


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
