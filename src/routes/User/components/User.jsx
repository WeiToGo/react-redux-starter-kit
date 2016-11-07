import React, { PropTypes, Component } from 'react'
import { Row, Col } from 'react-bootstrap'
// import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

export default class User extends Component {

  static propTypes = {
    logIn: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    creatingAccount: PropTypes.bool.isRequired,
    createdAccount: PropTypes.bool.isRequired,
    loggingIn: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired
  }
  // handleSubmit = (data) => {
  //   this.props.logIn(data.email, data.password)
  // }

  handleSubmit = (data) => {
    this.props.signUp(data.email, data.password, data.phone, data.address)
  }
  render () {
    return (
      <div>
        <Row>
          <Col sm={4} smOffset={4}>
            Please login
          </Col>
        </Row>
        <Row>
          <Col sm={4} smOffset={4}>
            <SignUpForm onSubmit={this.handleSubmit.bind(this)} />
          </Col>
        </Row>
      </div>
    )
  }
}
