import React from 'react';
import './SearchPage.css';
import { Chip } from '@material-ui/core';
import SearchResult from '../searchresult/SearchResult';

function SearchPage({}) {
    return (
        <div className="searchpage">
            <div className="searchpage__info">
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Chip clickable 
                    label="Cancellation Flexibility"
                />
                <Chip clickable delet
                    label="Entire Place"
                />
                <Chip clickable 
                    label="Price"
                />
                <Chip clickable 
                    label="Rooms and beds"
                />
                <Chip clickable 
                    label="More filters"
                />
            </div>
            <SearchResult 
            imageSrc="https://a0.muscache.com/im/pictures/a55be89a-4b8c-4590-8a36-2ff3896d1c19.jpg?aki_policy=large"
            title="Farm House in Nandi Valley"
            location="Farm stay oin Motlur"
            price="₹800 / night" 
            rating="4.55"
            numberOfReviews="44"
            description="13 guests · 3 bedrooms · 10 beds · 2 bathrooms"
            />
            <SearchResult 
            imageSrc="https://a0.muscache.com/im/pictures/a55be89a-4b8c-4590-8a36-2ff3896d1c19.jpg?aki_policy=large"
            title="Farm House in Nandi Valley"
            location="Farm stay oin Motlur"
            price="₹800 / night" 
            rating="4.55"
            numberOfReviews="44"
            description="13 guests · 3 bedrooms · 10 beds · 2 bathrooms"
            />
        </div>
    )
}

export default SearchPage
