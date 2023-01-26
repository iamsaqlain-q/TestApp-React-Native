import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import SignInPage from '../src/utility/SignInPage';

configure({adapter: new Adapter()});

it('Should render SignIn Page correctly', () => {
  const rendered = renderer.create(<SignInPage />).toJSON();
  expect(rendered).toBeTruthy();
});

it('Should render the Text element', () => {
  const wrapper = shallow(<SignInPage />);
  expect(wrapper.find('Text')).toHaveLength(3);
});

it('Should change state if email is entered', () => {
  const instanceOf = renderer.create(<SignInPage />).getInstance();
  instanceOf.handleEmailText('abc@gmail.com');
  expect(instanceOf.state.email).toEqual('abc@gmail.com');
});
