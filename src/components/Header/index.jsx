import Logo from '../Logo';
import AuthNavigation from '../AuthNavigation';
import UserMenu from '../UserMenu';
import './styles.css';
import Container from '../ContainerForHeader';
import BurgerMenu from '../BurgerMenu';
import { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { authSelectors,authOperations } from '../../redux/auth';
// заглушки
// const isAuthenticated = true;
// const name = 'Zinoviy';
// const onLogout = () => {
//   console.log('onLogout key pressed');
// };

const Header = ( {isAuthenticated, userName,onLogOut} ) => {
  useEffect(() => {
    console.log(`isAuthenticated`,isAuthenticated) ;
  });
 
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <header className="header-containe">
        {/* <Container> */}
        <div className="header header-container">
          <Logo/>
          <div className="separator"></div>
          {isAuthenticated ? (
            <UserMenu
              active={menuActive}
              menuHandler={setMenuActive}
            />
          ) : (
            <AuthNavigation />
          )}
        </div>
        {/* </Container> */}
        <BurgerMenu active={menuActive} />
        <div className="underline"></div>
        {isAuthenticated && (
          <div className="mobile_background">
            <div className="mobile user_auth_sub_container">
              <p className="mobile user_name">{userName}</p>
              <div className="mobile user_menu_separator"></div>
              <button
                className="mobile logout_button"
                type="button"
                onClick={onLogOut}
              >
                                Выйти
              </button>
            </div>
          </div>
        )}
        
      </header>
      {/* <div className="underline"></div> */}
    </>
  );
};

const mapDispatchToProps = {
  onLogOut: authOperations.logOut,
};
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
  userName: authSelectors.getUserName(state) 
});
export default connect(mapStateToProps,mapDispatchToProps)(Header);
