import { useState } from 'react';
import appClasses from '../../App.module.scss';
import classes from './Login.module.scss';
import LoginForm from '../UI/Forms/LoginForm/LoginForm';
import RegisterForm from '../UI/Forms/RegisterForm/RegisterForm';
import Button from '../UI/Button/Button'

const Login = props => {
   const [isRightPanelActive, toggleRightPanel] = useState(false);

   return (
      <div className={`${classes.Login} ${appClasses.section}`}>
         <div className={`${classes.container} ${isRightPanelActive ? classes['right-panel-active'] : ''}`}>
            <div className={`${classes['form-container']} ${classes['form-container_sign-up']}`}>
               <RegisterForm title='Create Account' className={classes.form} />
            </div>
            <div className={`${classes['form-container']} ${classes['form-container_sign-in']}`}>
               <LoginForm title='Sign In' className={classes.form} />
            </div>
            <div className={classes['overlay-container']}>
               <div className={classes.overlay}>
                  <div className={`${classes['overlay-panel']} ${classes['overlay-panel_left']}`}>
                     <h1 className={classes['overlay-title']}>Welcome Back!</h1>
                     <p className={classes['overlay-desc']}>To keep connected with us please login with your personal info</p>
                     <Button className={classes['overlay-button']} onClick={() => toggleRightPanel(false)}>
                        Sign In
                     </Button>
                  </div>
                  <div className={`${classes['overlay-panel']} ${classes['overlay-panel_right']}`}>
                     <h1 className={classes['overlay-title']}>Hello, Friend!</h1>
                     <p className={classes['overlay-desc']}>Enter your personal details and start journey with us</p>
                     <Button className={classes['overlay-button']} onClick={() => toggleRightPanel(true)}>
                        Sign Up
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
