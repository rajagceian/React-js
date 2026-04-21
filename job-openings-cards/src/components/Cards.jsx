import React from 'react'

const Cards = (props) => {
  return (
    <div className='card'>
    <div class="top">
      <img src={props.logo} class="logo"/>
      <div>
        <h2>{props.companyName}</h2>
        <p class="role">{props.role}</p>
      </div>
    </div>

    <div class="details">
      <p>📍 {props.location}</p>
      <p>🕒 Posted {props.posted}</p>
      <p>💰 {props.pay}</p>
    </div>

    <div class="tags">
        {props.tags.map(t=>{
            return <span>{t}</span>
        })}
    </div>

    <button>Apply Now</button>
    </div>
  )
}

export default Cards
