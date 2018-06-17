import { Link } from '../src/App.js';

describe('Link test', () => {
  it('has a url and title', () => {
    expect().toEqual({
      title: 'My Github',
      url: 'huynhtastic.github.com'
    });
  });
});
