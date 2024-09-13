import React from 'react';
import '../styles/components/Quote.scss';

const Quote: React.FC = () => {
  return (
    <div className="card quote">
      <p>"Ничего не бывает случайного. Всё имеет первопричину."</p>
      <p>- Зигмунд Фрейд</p>
    </div>
  );
};

export default Quote;