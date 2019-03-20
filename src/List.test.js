import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import STORE from './STORE'
const list = STORE.lists[0]
const cardsArr = list.cardIds.map(id => STORE.allCards[id])


it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  ReactDOM.render(<List header={list.header} cards={cardsArr} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders the UI as expected', () => {
  const tree = renderer
    .create(<List header={list.header} cards={cardsArr} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
