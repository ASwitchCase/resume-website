import React from 'react'

const Skill = (props) => {
  return (
    <React.Fragment>
        <div className='skill'>
            <img src={props.imgurl}></img>
            <h2>{props.title}</h2>
        </div>
        
    </React.Fragment>
  )
}

export default Skill
