import React, { useState, useEffect } from 'react';
import { CiWarning } from "react-icons/ci";
import {SlEnergy} from "react-icons/sl";
import '../styles/components/Battery.scss';

const Battery: React.FC = () => {
  const [energy, setEnergy] = useState(50);
  const [warning, setWarning] = useState(false);
  const [power, setPower] = useState(true);

  useEffect(() => {}, []);

  return (
    <div className="card battery">
      <div className="battery-icon">
        <div className="energy" style={{width: `${energy}%`, backgroundColor: "green"}}>
        </div>
        {

        }
        {warning ? <CiWarning /> : ""}
        {power ? <SlEnergy /> : ""}
      </div>
    </div>
  );
};

export default Battery;