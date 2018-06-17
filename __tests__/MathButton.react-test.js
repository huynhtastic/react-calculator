import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { AddButton } from '../src/components/FunctionalMathButtons.js';
import App from '../src/App.js';

configure({ adapter: new Adapter() });

describe('Testing the math buttons', () => {
  it('Add button adds to currentNumber', () => {
    //    const mathButton = shallow((<AddButton />));
    //    const app = mount(<App />);
    //expect(app.state().currentNumber).to.equal(1);
    const app = shallow(<App />);
    console.log(app.state().currentNumber);
    expect(app.state().currentNumber).toEqual(1);
  });
});

