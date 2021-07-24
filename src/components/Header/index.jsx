import Logo from '../Logo';
import AuthNavigation from '../AuthNavigation';
import './styles.css';

const Header = (/*{ isAuthenticated }*/) => {
  return (
    <header className='header'>
          <Logo />
          <div className='separator'></div>
          <AuthNavigation />
      {/* {isAuthenticated ? <UserMenu /> : <AuthNavigation />} */}
    </header>
  );
};

export default Header;