import React from 'react'
import Headline from './Headline'

const Item = (props) => {
  return (
    <React.Fragment>
        <div className='item'>
            <h1>{props.title}</h1>
            {props.data.map(item =>
              <Headline title={item.title} date={item.date} text={item.text}></Headline>
            )}
        </div>
    </React.Fragment>
  )
}

export default Item
