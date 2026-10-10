
import { Link, useLocation } from 'react-router-dom'
import { DashboardPage } from '../pages/DashboardPage';
import { HabitPage } from '../pages/HabitPage';
import { ProfilePage } from '../pages/ProfilePage';
import './Navbar.css'
export const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="nav-brand">HabitPro</div>
            <div className="nav-links">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                   Дашборд
                </Link>
                <Link to="/habits" className={location.pathname === '/habits' ? 'active' : ''}>
                    Habits
                </Link>
                <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>
                    Profile
                </Link>

            </div>

        </nav>
    )
}