import React from 'react'
import { Header } from 'components/Header/Header'
import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  });

  it('Renders the KittyTalk logo', () => {
    const logo = _wrapper.find(<div className="title">)
    expect(logo).to.exist
    expect(logo.text()).to.match(/KittyTalk/)
  });
})
