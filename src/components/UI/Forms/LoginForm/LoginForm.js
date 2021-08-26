import { reduxForm } from 'redux-form';
import { ReactComponent as EmailSVG } from '../../../../icons/mail.svg';
import { ReactComponent as KeySVG } from '../../../../icons/key.svg';
import Input from '../Input/Input';
import Button from '../../Button/Button';
import classes from '../Forms.module.scss';

const RegisterForm = ({ title, className }) => {
   return (
      <form method="POST" className={`${classes.Form} ${className || ''}`}>
         {title ? <h1 className={classes.title}>{title}</h1> : ''}
			<Input className={classes.input} name="name" type="text" label="Your Email" Icon={EmailSVG} required={true} />
			<Input className={classes.input} name="password" type="password" label="Your Password" Icon={KeySVG} required={true} />

         <Button type="submit" className={classes.button}>
            Sign In
         </Button>
      </form>
   );
};

export default reduxForm({
   form: 'login',
})(RegisterForm);
