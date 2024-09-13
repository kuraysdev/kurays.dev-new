import React from 'react';
import '../styles/components/Weather.scss';

const Weather: React.FC = () => {
  return (
    <div className="card weather">
      <h3>Четверг</h3>
      <p>Не дует</p>
      <p>22°C</p>
    </div>
  );
};

export default Weather;