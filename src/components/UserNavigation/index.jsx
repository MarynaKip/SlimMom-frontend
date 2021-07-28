import {NavLink} from 'react-router-dom';
import './styles.css';
const UserNavigation = () => {
  return (
    <div className='user_navigation_container'>
      <NavLink
        to="/mydiary"
        exact
        className='link'
        activeClassName='active_link'
      >
       ДНЕВНИК
      </NavLink>
      <NavLink
        to="/calculator"
        exact
        className='link'
        activeClassName='active_link'
      >
        КАЛЬКУЛЯТОР
      </NavLink>
    </div>
  );
};

export default UserNavigation;
