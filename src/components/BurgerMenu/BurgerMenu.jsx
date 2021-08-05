import { container, open } from './styles.module.css';
import UserNavigation from '../UserNavigation';
const BurgerMenu = ({active, menuHandler}) => {
  return (
    <div className={!active?container:`${container} ${open}`}>
      < UserNavigation burgerMenu={true} />
    </div>);
};

export default BurgerMenu;
