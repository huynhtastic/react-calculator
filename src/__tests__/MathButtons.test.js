import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App.js';

configure({ adapter: new Adapter() });
describe('Testing Math Buttons on App', () => {
  it('Testing if the app actually renders', () => {
    const app = shallow(<App />);
    expect(app.state().currentNumber).toEqual(1);
  });
})
