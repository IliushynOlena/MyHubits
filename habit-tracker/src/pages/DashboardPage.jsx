import React from 'react';
import { useSelector } from 'react-redux';
import './DashboardPage.css';

export const DashboardPage = () => {
  const habits = useSelector((state) => state.habits.list);
  const userName = useSelector((state) => state.habits.userName);

  const completedCount = habits.filter(h => h.completed).length;
  const totalCount = habits.length;
  const progress = totalCount > 0
    ? Math.round((completedCount / totalCount) * 100)
    : 0;

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">
        Вітаємо, {userName}! 👋
      </h1>

      <p className="dashboard__description">
        Ось ваш прогрес виконання звичок на сьогодні.
      </p>

      <div className="dashboard__stats">
        <div className="stat-card">
          <h3 className="stat-card__title">Всього звичок</h3>
          <p className="stat-card__value">{totalCount}</p>
        </div>

        <div className="stat-card">
          <h3 className="stat-card__title">Виконано сьогодні</h3>
          <p className="stat-card__value stat-card__value--success">
            {completedCount}
          </p>
        </div>

        <div className="stat-card">
          <h3 className="stat-card__title">Успішність</h3>
          <p className="stat-card__value stat-card__value--primary">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};