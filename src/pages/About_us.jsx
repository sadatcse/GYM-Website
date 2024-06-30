import AboutHero from '../components/About/AboutHero';
import VisionAndValues from '../components/About/VisionAndValues';
import Team from '../components/About/Team';
import Package_Membership from '../components/About/Package_Membership';
import Schedules from '../components/About/Schedules';
import MessageFromChairman from '../components/About/Chairman';

const About_us = () => {
    return (
       <div>
         <AboutHero />
         <MessageFromChairman />
         <VisionAndValues />
         <Team />
         <Package_Membership />
         <Schedules />
       </div>
    );
};

export default About_us;