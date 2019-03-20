import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';
const title = 'Card title', content = 'Card content'

it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
    ReactDOM.render(<Card title={title} content={content} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Card title={title} content={content} />)
    const instance = tree.root
    const h3 = instance.find(
        (el) => el.type == 'h3'
            && el.children
            
    );
    expect(h3.children[0]).toEqual(title);

    const para = instance.find(
        (el) => el.type == 'p'
            && el.children
            
    );
    expect(para.children[0]).toEqual(content);


});