import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1>{props.user}</h1>
      <h2>Age : {props.age}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore totam voluptate, illum, nisi obcaecati ea praesentium</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card
