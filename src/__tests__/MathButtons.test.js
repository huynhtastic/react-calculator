import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App.js';

configure({ adapter: new Adapter() });
describe('Testing Math Buttons on App', () => {
  const app = shallow(<App />);
  it('Testing if the app actually renders', () => {
    expect(app.state().currentNumber).toEqual(1);
  });
  it('Test if addButton will add', () => {
    app.find({ id: 'addButton' }).simulate('click');
    expect(app.state().currentNumber).toEqual(2);
  });
})
