import React from "react"
import Tab from "./Tab"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledTabs = styled.nav`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    width: 1280px;
  }
  .topics {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
  }
  .topics .title {
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`

const Tabs = ({ tabs, selectedTab, selectedTabHandler }) => {
  return (
    <StyledTabs>
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {tabs.map(tab => (
          <Tab
            key={tab}
            tab={tab}
            selectedTab={selectedTab}
            selectedTabHandler={selectedTabHandler}
          />
        ))}
      </div>
    </StyledTabs>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectedTabHandler: PropTypes.func.isRequired
}

// Make sure to use PropTypes to validate your types!
export default Tabs
