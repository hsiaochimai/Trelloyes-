import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
    ReactDOM.render(<List cards={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List cards={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });