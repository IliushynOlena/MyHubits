
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserName } from '../redux/habitsSlice';
import './ProfilePage.css';

export const ProfilePage = () => {
  const userName = useSelector((state) => state.habits.userName);
  const [nameInput, setNameInput] = useState(userName);
  const dispatch = useDispatch();

  const handleSave = (e) => {
    e.preventDefault();
    if (!nameInput.trim()) return;

    dispatch(updateUserName(nameInput.trim()));
    alert("Ім'я оновлено!");
  };

  return (
    <div className="profile">
      <h1 className="profile__title">👤 Профіль</h1>

      <form onSubmit={handleSave} className="profile__form">
        <label className="profile__label">
          Ваше ім'я:
        </label>

        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          className="profile__input"
        />

        <button type="submit" className="profile__button">
          Зберегти
        </button>
      </form>
    </div>
  );
};
