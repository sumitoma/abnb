import React from 'react';
import './Home.css';
import Banner from '../banner/Banner';
import SearchBar from '../searchbar/SearchBar';
import CardItem from '../carditem/CardItem';
import Footer from '../footer/Footer';


function Home() {
    return (
        <div className="home">
            <SearchBar />
            <Banner />
            <div className="home__card-row">
                <CardItem title="Online Experiences"
                imageSrc="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                description="Unique activities we can do together, led by a world of hosts."/>
                <CardItem title="Unique stays" 
                imageSrc="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                description="Spaces that are more than just a place to sleep."/>
                <CardItem title="Entire home"
                imageSrc="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" 
                description="Comfortable private places with room for friends or family."/>
            </div> 
            <Footer />
        </div>
    )
}

export default Home;
