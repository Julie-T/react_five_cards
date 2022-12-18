import React from 'react'
import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={props.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href='/#/react' className="btn btn-primary">{props.btn}</a>
      </div>
    </div> 
  )
}

Card.propTypes = {}

export default Card
