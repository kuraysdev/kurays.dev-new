import React, { useState, useEffect } from 'react';
import '../styles/components/Battery.scss';

const Battery: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {}, []);

  return (
    <div className="card battery">
      <div className="battery-icon">
        <div className="energy">
        </div>
      </div>
    </div>
  );
};

export default Battery;