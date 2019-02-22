import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledCard = styled.li`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
  .headline {
    font-size: 25px;
    font-family: Didot, serif;
  }
  .author {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
  }
  .author .img-container {
    padding-right: 10px;
    border-right: 1px solid lightgrey;
    height: 40px;
  }
  .author .img-container img {
    width: 40px;
  }
  .author span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`

const Card = ({ headline, img, author }) => {
  return (
    <StyledCard>
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img} alt={headline} />
        </div>
        <span>By {author}</span>
      </div>
    </StyledCard>
  )
}

// Make sure to include PropTypes.
export const cardPropTypes = {
  headline: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  tab: PropTypes.string
}

Card.propTypes = cardPropTypes

export default Card
