import React, { Component, PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { Row, Col, Button } from 'react-bootstrap';
import { postMessage } from '../modules/profile';
import './Profile.scss';

export default class Profile extends Component {
  static propTypes = {
    posts: PropTypes.array,
  }
  handlePost() {
    this.props.postMessage(document.getElementById('messageInput').value);
    document.getElementById('messageInput').value == '';
  }

  render() {
    const { posts } = this.props;
    const myPosts = posts ? posts.map(post => {
      return (
        <li>post</li>
      );
    }) : null;
    const inputMessage = (
      <input id="messageInput" type="textarea"
        className="messageInput" />
    );

    const submitButton = (
      <Button className='btn' onClick={this.handlePost.bind(this)}>Post</Button>
    )
    return (
      <div className="container">
        <DocumentMeta title='Profile'/>
        <div>
          <Row className="row">
            {myPosts}
          </Row>
          <Row className="row">
            {inputMessage}
          </Row>
          <Row className="row">
            {submitButton}
          </Row>
        </div>
      </div>
    );
  }
}
