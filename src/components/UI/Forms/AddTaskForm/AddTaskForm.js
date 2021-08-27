import { useState } from 'react';
import { change, reduxForm } from 'redux-form';
import {Picker} from 'emoji-mart';
import { ReactComponent as TitleSVG } from '../../../../icons/title.svg';
import { ReactComponent as DescSVG } from '../../../../icons/desc.svg';
import { ReactComponent as EmojiSVG } from '../../../../icons/happy.svg';
import { ReactComponent as DateSVG } from '../../../../icons/date.svg';
import Input from '../Input/Input';
import Button from '../../Button/Button';
import 'emoji-mart/css/emoji-mart.css'
import classes from '../Forms.module.scss';
import { connect } from 'react-redux';

const AddTaskForm = ({ title, className, change }) => {
	const [isPickerActive, togglePicker] = useState('');
   const showPicker = () => togglePicker(true);
   const hidePicker = () => togglePicker(false);
	const onEmojiSelect = emoji => {
		change('add-task', 'emoji', emoji.native)
		return hidePicker()
	}

   return (
      <form method="POST" className={`${classes.Form} ${className || ''}`}>
         {title ? <h1 className={classes.title}>{title}</h1> : ''}
         <Input className={classes.input} name="title" type="text" label="Task Title" Icon={TitleSVG} required={true} />
         <Input className={classes.input} name="desc" type="text" label="Task Description" Icon={DescSVG} required={true} />
         <Input
            className={classes.input}
            name="emoji"
            type="text"
            label="Task Emoji"
            Icon={EmojiSVG}
            required={true}
				autoComplete="off"
				onChange={e => e.preventDefault()}
            onFocus={showPicker}
         />
			<Picker title="aim4" onSelect={onEmojiSelect} style={{display: isPickerActive ? 'block' : 'none'}} />
			<Input className={classes.input} name="exp-date" type="datetime-local" label="Task Expiration Date" Icon={DateSVG} />
         <Button type="submit" className={classes.button}>
            Sign In
         </Button>
      </form>
   );
};

export default reduxForm({
   form: 'add-task'
})(connect(null, {change})(AddTaskForm));
