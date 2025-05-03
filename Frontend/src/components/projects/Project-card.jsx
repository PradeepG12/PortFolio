import React from 'react'
import './project-card.css'


const Card = ({item,index}) => {
  return (
    <div className='project-card' key={index}>
      <div className="top">
        <h1 className='title'>{item.title}</h1>
      </div>
      <div className="middle">
        <div className="card-img"><img src={item.img} alt="" /></div>
      </div>
      <div className="bottom">
        <div className="card-details">{item.details}</div>
        <div className="link phone">
          <button className="web-link">Link</button>
          <div className="redirect">
            <a href='he'>Visit Website</a>
          </div>
        </div>
      </div>      
      
    </div>
  )
}

export default Card