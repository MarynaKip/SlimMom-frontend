import { NavLink } from 'react-router-dom';
import './styles.css';
// import desctopLogo from '../../images/logo-desctop-mini.png';
// import tabletLogo from '../../images/logo-tablet-mini.png';
// import mobileLogo from '../../images/logo-mobile-mini.png';
const Logo = () => {
   return (
       <div className='logo'>
           <NavLink to='/'
               exact
               className='link'
               activeClassName="altiveLink">
               <div className='logo-image'></div>
               {/* <img
               srcSet={`${mobileLogo} 320w,
                 ${tabletLogo} 768w,
                ${desctopLogo} 1280w`}
                sizes={`(max-width: 767px) 320px,
                (max-width: 1279px) 768px,
                 1280px`}
                   src={desctopLogo}
                   className='logo_image'
                   alt='logo' /> */}
           </NavLink>
        </div>
  );
};
export default Logo;