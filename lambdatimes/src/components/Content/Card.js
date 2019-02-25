import React from "react"
import PropTypes from "prop-types"

const Card = ({ headline, img, author }) => {
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img} alt={headline} />
        </div>
        <span>By {author}</span>
      </div>
    </div>
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
