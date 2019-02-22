import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledTab = styled.button`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: ${({ selected }) => (!selected ? "#fff" : "#333")};
  background-color: ${({ selected }) => (selected ? "#fff" : "#333")};
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  border: ${({ selected }) => (selected ? "2px solid #333" : "none")};
  &:hover {
    text-decoration: underline;
  }
`

const Tab = ({ tab, selectedTab, selectedTabHandler }) => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <StyledTab selected={tab === selectedTab} onClick={selectedTabHandler(tab)}>
      {tab.toUpperCase()}
    </StyledTab>
  )
}

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectedTabHandler: PropTypes.func.isRequired
}

export default Tab
