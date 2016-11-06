import React, { PropTypes, Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import LoginForm from './LoginForm'

export default class User extends Component {

  static propTypes = {
    logIn: PropTypes.func.isRequired,
    creatingAccount: PropTypes.bool.isRequired,
    createdAccount: PropTypes.bool.isRequired,
    loggingIn: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired
  }
  handleSubmit = (data) => {
    console.log('data ', data)
    this.props.logIn(data.email, data.password)
  }
  render () {
    return (
      <div>
        <Row>
          <Col sm={4} smOffset={4}>
            Please login
          </Col>
          <Col sm={4} smOffset={4}>
            <LoginForm onSubmit={this.handleSubmit.bind(this)} />
          </Col>
        </Row>
      </div>
    )
  }
}
