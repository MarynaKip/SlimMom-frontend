import Logo from '../Logo';
import AuthNavigation from '../AuthNavigation';
import UserMenu from '../UserMenu';
import './styles.css';
import Container from '../../components/ContainerForHeader';
import BurgerMenu from '../BurgerMenu';
import { useState } from 'react';
// заглушки
const isAuthenticated = true;
const name = 'Zinoviy';
const onLogout = () => {
    console.log('onLogout key pressed');
};

const Header = (/* { isAuthenticated }*/) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <header>
      <Container>
        <div className='header'>
          <Logo isAuthenticated={isAuthenticated} />
          <div className='separator'></div>
          {isAuthenticated ? (
            <UserMenu active={menuActive} menuHandler={setMenuActive} />
          ) : (
            <AuthNavigation />
          )}
        </div>
      </Container>
      <div className='underline'></div>
      <BurgerMenu active={menuActive} />
      {isAuthenticated && (
        <div className='mobile_background'>
          <div className='mobile user_auth_sub_container'>
            <p className='mobile user_name'>{name}</p>
            <div className='mobile user_menu_separator'></div>
            <button
              className='mobile logout_button'
              type='button'
              onClick={onLogout}
            >
              Выйти
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
