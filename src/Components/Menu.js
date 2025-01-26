import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';

import '../styles/normilize.css';
import './Menu.css';

const Menu = () => {
  const Genres = ['Все фильмы',
    'Триллер', 'Приключения', 'Комедия',
    'Мультфильмы', 'Фантастика', 'Фэнтези',
    'Мюзикл', 'Спорт', 'Детектив',
    'Ужасы', 'Мелодрама', '',
  ];
  const navigate = useNavigate();

  return (
    <div className='menu'>
      <h1>Выберите жанр кино</h1>
      <div className='btn_wrapper'>
        {Genres.map((genre) => (
          <li key={genre}>
            <button className='btn' onClick={() => navigate(`/${genre}`)}>{genre}</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export { Menu };