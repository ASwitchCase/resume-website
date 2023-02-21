import React from 'react'

const Headline = (props) => {
  return (
    <React.Fragment>
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <p>{props.text}</p>
    </React.Fragment>
  )
}

export default Headline
