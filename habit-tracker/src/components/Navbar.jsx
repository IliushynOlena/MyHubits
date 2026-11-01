
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
export const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="nav-brand">HabitProooooo</div>
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
                  <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>
                    Profile
                </Link>

            </div>

        </nav>
    )
}