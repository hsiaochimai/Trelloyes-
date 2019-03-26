import React from 'react'
import propTypes from 'prop-types'
import Card from "./Card.js"
import './List.css'



export default function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map((card, index) =>
          <Card
            key={`card-${index}`}
            title={card.title}
            content={card.content}
            onDelete={()=>{props.onDelete(card, props.list)}}
          />
        )}

        <button
          type='button'
          className='List-add-button'
          onClick={()=>{props.onAddCard(props.id)}}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}

List.propTypes = {
  cards: propTypes.array.isRequired,
  heading: propTypes.string,
}
