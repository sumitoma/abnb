import React from 'react';
import './CardItem.css';


function CardItem({imageSrc, title, description}) {
    return (
        <div className="card">
            <img src={imageSrc} alt=""/>
            <div className="card__content">
                <h2>{title}</h2>
                <h4>{description}</h4>
            </div>
        </div>
    )
}

export default CardItem;
