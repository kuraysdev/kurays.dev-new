// FinanceCard.tsx
import React, { useState, useEffect } from 'react';
import '../styles/components/FinanceCard.scss';

interface FinanceCardProps {
  currentBalance: number;
  addedAmount: number;
}

const FinanceCard: React.FC<FinanceCardProps> = ({ currentBalance, addedAmount }) => {
  const [displayedBalance, setDisplayedBalance] = useState(currentBalance);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedBalance(currentBalance + addedAmount);
    }, 1000); // Анимация через 1 секунду

    return () => clearTimeout(timer);
  }, [currentBalance, addedAmount]);

  return (
    <div className="card finance-card">
      <h3>Мои финансы</h3>
      <p>Текущий баланс: {displayedBalance} ₽</p>
      <p className="added-amount">+{addedAmount} ₽</p>
    </div>
  );
};

export default FinanceCard;