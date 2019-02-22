import React from "react"
import PropTypes from "prop-types"
import Card, { cardPropTypes } from "./Card"
import styled from "styled-components"

const StyledCardsContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
    width: 1200px;
  }
`

const Cards = ({ cards }) => {
  return (
    <StyledCardsContainer>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {cards.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </StyledCardsContainer>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(cardPropTypes))
}

export default Cards
