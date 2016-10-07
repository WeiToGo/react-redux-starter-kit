import React, { Component, PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router';
import { uploadImage } from '../modules/login';
import './Login.scss';

export default class Login extends Component {
  static propTypes = {
    imageUrl: PropTypes.string,
  }

  _handleImageChange(evt) {
    evt.preventDefault();
    const reader = new FileReader();
    const file = evt.target.files[0];
    reader.onloadend = () => {
      this.props.uploadImage(reader.result);
    };
    reader.readAsDataURL(file);
  }
  _uploadPicture() {
    document.getElementById('loginInput').click();
  }

  render() {
    const pic = this.props.imageUrl;
    const loginButton = (
      <Link to={{pathname: 'profile/'}}>
        <Button className="btn" disabled={!pic}>Login</Button>
      </Link>
    );
    const picture = <img className="picture" src={pic}/>;
    const upLoadLink = <a className="link" onClick={this._uploadPicture}>Upload a picture to login!</a>;

    return (
      <div className="container">
        <DocumentMeta title='Login'/>
        <div>
          <Row className="row">
            <Col sm={4} smOffset={4}>
              {picture}
            </Col>
          </Row>
          <Row className="row">
            <Col sm={4} smOffset={4}>
              {upLoadLink}
            </Col>
          </Row>
          <Row>
            <Col sm={4} smOffset={4}>
              <form>
                <input id="loginInput" type="file" accept="image/*" capture="camera"
                  onChange={(evt) => this._handleImageChange(evt)}
                  className="fileInput" />
              </form>
            </Col>
          </Row>
        </div>
        <div>
          <Row className="row">
            <Col sm={4} smOffset={4}>
              {loginButton}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
