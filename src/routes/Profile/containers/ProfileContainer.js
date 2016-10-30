import { connect } from 'react-redux'
import { addPost, editPost } from '../modules/profile'

import Profile from '../components/Profile'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  addPost,
  editPost,
}

const mapStateToProps = (state) => ({
  posts : state.profile
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
