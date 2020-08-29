import React from 'react';
import './Banner.css';
import { useHistory } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';

function Banner() {

    const history = useHistory();
    
    const onBannerClick = ()=>{
        history.push('/search');
    };

    return (
        <div className="banner" onClick={onBannerClick}>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of gateway to uncover the hidden gems near you.</h5>
                <div className="banner__explore-btn">
                    <span>Explore Nearby</span>
                    <ArrowForwardIcon />
                </div>
            </div>
        </div>
    )
}

export default Banner;
