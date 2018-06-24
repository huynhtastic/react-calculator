import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MathButton from '../components/MathButton.js'
import App from '../App.js';

configure({ adapter: new Adapter() });
describe('Testing Math Buttons on App', () => {
  const app = shallow(<App />);
  it('Testing if the app actually renders', () => {
    expect(app.state().currentNumber).toEqual(1);
  });
  it('Test if MathButton initializes correctly', () => {
    const mockFunc = jest.fn();

    const mathButton = shallow(<MathButton id='button' onClickFunc={mockFunc}
      label='a button' />);
    mathButton.find('button').simulate('click');
    expect(mockFunc.mock.calls.length).toEqual(1);
  });
})
