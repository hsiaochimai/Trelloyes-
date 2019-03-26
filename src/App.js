import React, { Component } from "react";
import List from "./List.js";
import STORE from "./STORE";
import "./App.css";
// state component
const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}
class App extends Component {
  state = {
    lists: STORE.lists,
    allCards: STORE.allCards
  };
  handleDeleteItem = (card, list) => {
    console.log("deleted item", card);
    let cardId = null;
    Object.keys(this.state.allCards).forEach(id => {
      console.log(`id-`, id);
      console.log(`allCards is`, this.state.allCards[id]);
      if (this.state.allCards[id] === card) {
        cardId = id;
      }
    });
    console.log(`id is`, cardId);
    console.log(`list is`, list);
    const newList = { ...list };
    newList.cardIds.splice(newList.cardIds.indexOf(cardId), 1);
    const newLists = this.state.lists.slice(0);
    newLists[newLists.indexOf(list)] = newList;
    this.setState({ lists: newLists });
  };
      handleAddCard=(listId)=>{
        let newCard= newRandomCard()
        console.log(`the new card is`, newCard)
        const newLists=this.state.lists.map(list=>{
          if (list.id===listId){
            list.cardIds.push(newCard.id)
          }
          return list
        })
        this.setState({
            lists: newLists,
            allCards: {
              ...this.state.allCards,
              [newCard.id]: newCard
            }
          }
        )
      }
  render() {
    const { allCards, lists } = this.state;
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => allCards[id])}
              list={list}
              onDelete={this.handleDeleteItem}
              onAddCard={this.handleAddCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
