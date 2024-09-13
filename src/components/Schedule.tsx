import React from 'react';
import '../styles/components/Schedule.scss';

interface Lesson {
  time: string;
  subject: string;
}

const schedule: Lesson[] = [
  { time: '8:30 - 10:30', subject: 'Интернет технологии' },
  { time: '10:40 - 11:40', subject: 'Интернет технологии' },
];

const Schedule: React.FC = () => {
  return (
    <div className="card schedule">
      <h3>Пары сегодня</h3>
      <ul>
        {schedule.map((lesson, index) => (
          <li key={index}>
            <span className="sub-time">{lesson.time}</span>
            <span className="subject">{lesson.subject}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;