import { Field } from 'redux-form';
import classes from './Input.module.scss';

const Input = ({ className, name, type, required, label, Icon, ...props  }) => {
   if (!name) return false;
   return (
      <div className={`${classes.input} ${className}`}>
         <Field name={name} component="input" type={type || 'text'} placeholder=" " required={required || false} {...props}/>
			{Icon ? <div className={classes['input__icon']}><Icon fill="#575757" /></div> : ''}
         {label ? <label htmlFor={name}>{label}</label> : ''}
      </div>
   );
};

export default Input;
