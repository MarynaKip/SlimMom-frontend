/* eslint-disable max-len */
import './styles.css';
import UserNavigation from '../UserNavigation';

// заглушки
const name = 'Zinoviy';
const onLogout = () => {
  console.log('onLogout key pressed');
};
// let burgerOpen = false;
// const togleMenu = () => {
//   burgerOpen = burgerOpen ? false : true;
// };
const UserMenu = ({
  menuHandler,
  active /* name, onLogout, burgerOpened */,
}) => {
  return (
    <div className='user_menu_container'>
      <UserNavigation />
      <div className='user_auth_container'>
        <div className='user_auth_sub_container'>
          <p className='user_name'>{name}</p>
          <div className='user_menu_separator'></div>
          <button className='logout_button' type='button' onClick={onLogout}>
            Выйти
          </button>
        </div>
        <button
          className='burger_menu_button'
          type='button'
          onClick={() => menuHandler(!active)}
        >
          {active ? (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z'
                fill='#212121'
              />
            </svg>
          ) : (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M6 6L18 18' stroke='#212121' strokeWidth='2' />
              <path d='M6 18L18 6' stroke='#212121' strokeWidth='2' />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
