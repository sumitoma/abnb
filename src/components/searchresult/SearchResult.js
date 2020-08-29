import React from 'react';
import './SearchResult.css';
import FavBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchResult({ 
    imageSrc, 
    location,
    title,
    description,
    rating,
    numberOfReviews,
    price
}) {
    return (
        <div className="searchresult">
            <img src={imageSrc} alt=""/>
            <div className="searchresult__details">
                <div className="searchresult__details-top">
                    <div className="searchresult__details-top-left">
                        <p>{location}</p>
                        <h3>{title}</h3>
                        <p>_______</p>
                        <p style={{marginTop: '9px'}}>{description}</p>
                    </div>
                    <FavBorderIcon />
                </div>
                <div className="searchresult__details-bottom">
                    <div className="searchresult__details-bottom-left">
                        <StarIcon />
                        <p>{rating} ({numberOfReviews})</p>
                    </div> 
                    <div className="searchresult__details-bottom-right">
                        <p>{price}</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default SearchResult;
