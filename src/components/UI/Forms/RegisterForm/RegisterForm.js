import { reduxForm } from 'redux-form';
import { ReactComponent as UserSVG } from '../../../../icons/user.svg';
import { ReactComponent as EmailSVG } from '../../../../icons/mail.svg';
import { ReactComponent as KeySVG } from '../../../../icons/key.svg';
import { ReactComponent as ImageSVG } from '../../../../icons/image.svg';
import { ReactComponent as GoalSVG } from '../../../../icons/goal.svg';
import Input from '../Input/Input';
import Button from '../../Button/Button';
import classes from '../Forms.module.scss';

const RegisterForm = ({ title, className }) => {
   return (
      <form method="POST" className={`${classes.Form} ${className || ''}`}>
         {title ? <h1 className={classes.title}>{title}</h1> : ''}
			<Input className={classes.input} name="name" type="text" label="Your Name" Icon={UserSVG} required={true} />
			<Input className={classes.input} name="email" type="text" label="Your Email" Icon={EmailSVG} required={true} />
			<Input className={classes.input} name="password" type="password" label="Your Password" Icon={KeySVG} required={true} />
			<Input className={classes.input} name="img-url" type="text" label="Your Profile Image URL" Icon={ImageSVG} required={true} />
			<Input className={classes.input} name="daily-goal" type="number" label="Your Daily Goal" Icon={GoalSVG} required={true} />

			<Button type="submit" className={classes.button}>Sign Up</Button>
      </form>
   );
};

export default reduxForm({
   form: 'register',
})(RegisterForm);
