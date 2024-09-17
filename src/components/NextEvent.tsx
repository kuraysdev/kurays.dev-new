import React, { useState, useEffect } from 'react';
import '../styles/components/NextEvent.scss';

const NextEvent: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [eventType, setEventType] = useState<'sleep' | 'wake'>('sleep');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      let hoursLeft: number;
      let minutesLeft: number;
      console.log(currentHour+":"+currentMinute)

      if (currentHour >= 7 && currentHour < 24) {
        // Время между 7:00 и 24:00
        setEventType('sleep');
        hoursLeft = 22 - currentHour;
        minutesLeft = 60 - currentMinute;
        if (minutesLeft > 0) {
          hoursLeft += 1;
        }
      } else {
        // Время между 0:00 и 7:00
        setEventType('wake');
        if (currentHour < 7) {
          hoursLeft = 7 - currentHour;
          minutesLeft = 60 - currentMinute;
          if (minutesLeft > 0) {
            hoursLeft += 1;
          }
        } else {
          hoursLeft = 0;
          minutesLeft = 0;
        }
      }

      setTimeLeft(`${hoursLeft}h ${minutesLeft}min`);
    };

    updateTime();
    const timer = setInterval(updateTime, 60000); // Обновляем каждую минуту

    return () => clearInterval(timer);
  }, []);

  const calculateProgressWidth = (): number => {
    const [hours, minutes] = timeLeft.split('h ');
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
    const maxMinutes = eventType === 'sleep' ? 17 * 60 : 7 * 60;
    return ((maxMinutes - totalMinutes) / maxMinutes) * 100;
  };

  return (
    <div className="card next-event">
      <h3>{eventType === 'sleep' ? 'Пойду спать через' : 'Проснусь через'}</h3>
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${calculateProgressWidth()}%` }}
        ></div>
      </div>
      <p>{timeLeft}</p>
    </div>
  );
};

export default NextEvent;