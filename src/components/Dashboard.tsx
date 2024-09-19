import React from 'react';
import Profile from './Profile';
import IconCard from './IconCard';
import TimeDisplay from './TimeDisplay';
import MusicPlayer from './MusicPlayer';
import Quote from './Quote';
import Weather from './Weather';
import NextEvent from './NextEvent';
//import FinanceCard from './FinanceCard';
import { FiPhone, FiVolume2, FiZap, FiSun } from 'react-icons/fi';
import '../styles/components/Dashboard.scss';
import Schedule from './Schedule';
import PlanetCardsComponent from './CommentPlanet';
import Battery from './Battery';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Profile />
      {/* <IconCard icon={<FiPhone />} />
      <IconCard icon={<FiVolume2 />} /> */}
      {/* <IconCard icon={<FiZap />} />
      <IconCard icon={<FiSun />} /> */}
      <MusicPlayer />
      <TimeDisplay />
      <Battery />
      <Quote />
      <Weather />
      <NextEvent />
      <Schedule />
      {/* <FinanceCard currentBalance={10000} addedAmount={500} /> */}
      <PlanetCardsComponent/>
    </div>
  );
};

export default Dashboard;
