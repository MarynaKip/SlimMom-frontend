import { NavLink } from 'react-router-dom';
import './styles.css';
const AuthNavigation = () => {
  
  return (
    <div className='navigation_container'>
      <NavLink
        to="/login"
        exact
        className='link'
        activeClassName='active_link'
      >
       ВХОД
      </NavLink>
      <NavLink
        to="/register"
        exact
        className='link'
        activeClassName='active_link'
      >
        РЕГИСТРАЦИЯ
      </NavLink>
    </div>
  );
};

export default AuthNavigation;