import { NavLink } from 'react-router-dom';
import './styles.css';
const UserNavigation = ({ burgerMenu }) => {
  const container = burgerMenu ? 'burger_menu' : 'user_navigation_container';
  const link = burgerMenu ? 'burger_link' : 'link';
  const activeLink = burgerMenu ? 'burger_active_link' : 'active_link';
  return (
    <div className={container}>
      <NavLink
        to='/mydiary'
        exact
        className={link}
        activeClassName={activeLink}
      >
        ДНЕВНИК
      </NavLink>
      <NavLink
        to='/calculator'
        exact
        className={link}
        activeClassName={activeLink}
      >
        КАЛЬКУЛЯТОР
      </NavLink>
    </div>
  );
};

export default UserNavigation;
