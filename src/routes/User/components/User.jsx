import React, { PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'
import LoginForm from './LoginForm'

export const User = (props) => (
  <div>
    <Row>
      <Col sm={4} smOffset={4}>
        HELLO!
      </Col>
      <Col sm={4} smOffset={4}>
        <LoginForm onSubmit={props.login} />
      </Col>
    </Row>

  </div>
)

User.propTypes = {
  login     : PropTypes.func.isRequired
}

export default User
