import React, { useContext } from 'react';
import Banner from '../components/Homepage/Banner';
import Advertise from '../components/Homepage/Advertise';
import Whychoice from '../components/Homepage/Whychoice';
import Sucessful from '../components/Homepage/Sucessful';
import OurTrainer from '../components/Homepage/OurTrainer';
import Photo_galary from '../components/Homepage/Photo_galary';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Advertise></Advertise>
            <Whychoice></Whychoice>
            <Sucessful></Sucessful>
            <OurTrainer></OurTrainer>
            <Photo_galary></Photo_galary>
        </div>
    );
};

export default Home;