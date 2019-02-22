import React, { Component } from "react"

import Tabs from "./Tabs"
import Cards from "./Cards"

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData as _cardData } from "../../data"
import styled from "styled-components"

const hash = str =>
  Array.from(str)
    .map(char => char.charCodeAt().toString(16))
    .join("")

const StyledContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: "all",
      tabs: [],
      cards: []
    }
  }

  componentDidMount() {
    const cardData = _cardData.map(card => ({
      ...card,
      id: hash(card.img + card.headline)
    }))
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState(() => ({
      tabs: tabData,
      cards: cardData
    }))
  }

  changeSelected = tab => () => {
    // this function should take in the tab and update the state with the new tab.
    this.setState(() => ({
      selected: tab
    }))
  }

  filterCards = (cards, selected) => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
    return selected === "all"
      ? cards
      : cards.filter(({ tab }) => tab === selected)
  }

  render() {
    const { cards, tabs, selected } = this.state
    return (
      <StyledContentContainer>
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs
          tabs={tabs}
          selectedTab={selected}
          selectedTabHandler={this.changeSelected}
        />
        <Cards cards={this.filterCards(cards, selected)} />
      </StyledContentContainer>
    )
  }
}
