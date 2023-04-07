import {React,  useEffect } from 'react';

import '../RosterCard/Card.css'
function Card ({data}) {
    
    useEffect(() => {
        console.log(data)
    })


    return (
      <div className="card">
      <div className="container-card bg-green-box">
      
        <div className="row">
        <p className="card-title">{data.name}</p>
        <img src={data.class} className="card-icon" />
        <p className="card-role">{data.role}</p>
        </div>
        <p className="card-description">{data.desc}</p>
        {
          data.stream ?
          
          <a href={data.stream} target='_blank' className="card-stream">Stream</a>
          :
          <p></p>
        }
      </div>
    </div>
      )
}

export default Card;
