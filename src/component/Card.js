import React from 'react'

function Card({ name, imageUrl }) {

    return (
        <div className="card" >
            <img src={imageUrl} className="card-img-top" alt="" />
            <div className="card-body">
                <p className="card-text">{name}</p>
            </div>
        </div>
    )
}

export default Card