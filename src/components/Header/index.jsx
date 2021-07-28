import Logo from '../Logo';
import AuthNavigation from '../AuthNavigation';
import UserMenu from '../UserMenu';
import './styles.css';
import Container from '../../components/ContainerForHeader';

// заглушки
const isAuthenticated = true;
const name = 'Zinoviy';
const onLogout = () => {
  console.log('onLogout key pressed');
};

const Header = (/* { isAuthenticated }*/) => {
  return (
    <header>
      <Container>
        <div className='header'>
          <Logo isAuthenticated={isAuthenticated} />
          <div className='separator'></div>
          {isAuthenticated ? <UserMenu /> : <AuthNavigation />}
        </div>

      </Container>
      <div className='underline'></div>
      {isAuthenticated&&(<div className='mobile_background'>
        <div className='mobile user_auth_sub_container'>
          <p className='mobile user_name'>{name}</p>
          <div className='mobile user_menu_separator'></div>
          <button
            className='mobile logout_button'
            type="button"
            onClick={onLogout}
          >
          Выйти
          </button>
        </div>
      </div>)}

    </header>
  );
};

export default Header;
