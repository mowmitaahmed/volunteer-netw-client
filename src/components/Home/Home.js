import React from 'react';
import BannerArea from '../BannerArea/BannerArea';
import Header from '../Header/Header';
import EventArea from '../EventArea/EventArea';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BannerArea></BannerArea>
            <EventArea></EventArea>
        </div>
    );
};

export default Home;