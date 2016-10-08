import React from 'react'
import { bindActionCreators } from 'redux'
import { Login } from 'routes/Login/components/Login'
import { shallow } from 'enzyme'

describe('(Component) Login', () => {
  let _props, _spies, _wrapper;

  beforeEach(() => {
    _spies = {}
    _props = {
      imageUrl: null
    }
    _wrapper = shallow(<Login {..._props} />)
  });

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true);
  });

  it('Should render exactly one link.', () => {
    expect(_wrapper.find('a')).to.have.length(1);
  });


  it('Should render exactly one button.', () => {
    expect(_wrapper.find('button')).to.have.length(1);
  });

  describe('login button...', () => {
    let loginButton, postButton,

    beforeEach(() => {
      loginButton = _wrapper.find('button').filterWhere(a => a.text() === 'Login');
    });

    it('Should leads to Profile page', () => {
      loginButton.simulate('click');
      profileButton = _wrapper.find('button').filterWhere(a => a.text() === 'Post');
      expect(profileButton).to.exist;
    });
  });
})
