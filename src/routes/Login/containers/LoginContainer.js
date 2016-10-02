import { connect } from 'react-redux'
import { uploadImage } from '../modules/login'


import Login from '../components/Login'

const mapDispatchToProps = {
  uploadImage,
}

const mapStateToProps = (state) => ({
  imageUrl : state.login,
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)
