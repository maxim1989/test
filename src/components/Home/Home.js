import React from 'react';
import { NavLink } from 'react-router-dom';

import './Home.css';

export const Home = () => (
    <div className="home">
        <p className="home-salutation">Привет!</p>
        <nav className="home-navigation">
            <NavLink to="/users" className="home-navigation_users">
                Ссылка на список пользователей
            </NavLink>
        </nav>
    </div>
);
