import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addHabit, toggleHabit, deleteHabit } from '../redux/habitsSlice';
import { Plus, Trash2, CheckCircle, Circle } from 'lucide-react';
import './HabitPage.css';


export const HabitPage = () => {
  const [text, setText] = useState('');
  const habits = useSelector((state) => state.habits.list);
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addHabit(text));
    setText('');
  };


  return (
    <div className="habits-container">
      <h1>✨ Управління звичками</h1>


      <form onSubmit={handleSubmit} className="habit-form">
        <input
          type="text"
          placeholder="Нова звичка (наприклад, Зарядка)..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit"><Plus size={18} /> Додати</button>
      </form>


      <div className="habits-list">
        {habits.map((habit) => (
          <div key={habit.id} className={`habit-card ${habit.completed ? 'done' : ''}`}>
            <div className="habit-info" onClick={() => dispatch(toggleHabit(habit.id))}>
              {habit.completed ? <CheckCircle color="#05CD99" size={22} /> : <Circle color="#A3AED0" size={22} />}
              <span className="habit-title">{habit.title}</span>
            </div>
            <div className="habit-meta">
              <span className="streak">🔥 {habit.streak} днів</span>
              <button className="delete-btn" onClick={() => dispatch(deleteHabit(habit.id))}>
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
