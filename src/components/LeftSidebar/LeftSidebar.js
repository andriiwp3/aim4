import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../icons/target.svg';
import { ReactComponent as PlusSVG } from '../../icons/plus.svg';
import { ReactComponent as DashboardSVG } from '../../icons/dashboard.svg';
import { ReactComponent as ClipboardSVG } from '../../icons/clipboard.svg';
import { ReactComponent as SettingsSVG } from '../../icons/settings.svg';
import { section as sectionClassName, item as itemClassName } from '../../App.module.scss';
import Button from '../UI/Button/Button';
import classes from './LeftSidebar.module.scss';

const LeftSidebar = props => {
   return (
      <div className={`${classes.LeftSidebar} ${sectionClassName}`}>
         <div className={classes.logo}>
            <div className={classes.logo__icon}>
               <Logo />
            </div>
            <span>aim4</span>
         </div>
         <div className={`${classes['btn-create']} ${itemClassName}`}>
            <Button>
               <p>Create new task</p>
               <div className={classes['btn-create__icon']}>
                  <PlusSVG />
               </div>
            </Button>
         </div>
         <nav className={classes.menu}>
            <ul className={classes.menu__list}>
               <li className={classes.menu__item}>
                  <NavLink to="/" exact={true} className={classes.menu__link} activeClassName={classes.active}>
                     <div className={classes.menu__link__icon}>
                        <DashboardSVG fill="#575757" />
                     </div>
                     <span>Dashboard</span>
                  </NavLink>
               </li>
               <li className={classes.menu__item}>
                  <NavLink to="/tasks" exact={true} className={classes.menu__link} activeClassName={classes.active}>
                     <div className={classes.menu__link__icon}>
                        <ClipboardSVG fill="#575757" />
                     </div>
                     <span>Tasks List</span>
                  </NavLink>
               </li>
               <li className={classes.menu__item}>
                  <NavLink to="/settings" exact={true} className={classes.menu__link} activeClassName={classes.active}>
                     <div className={classes.menu__link__icon}>
                        <SettingsSVG fill="#575757" />
                     </div>
                     <span>Settings</span>
                  </NavLink>
               </li>
            </ul>
         </nav>
         <div className={classes.copyright}>
            <kbd>© Created by Andrew Herchykov</kbd>
         </div>
      </div>
   );
};

export default LeftSidebar;
