import Emoji from '../UI/Emoji/Emoji';
import classes from './TaskCard.module.scss';

const TaskCard = ({className}) => {
   return (
      <div className={`${classes.TaskCard} ${className}`}>
         <div className={classes.icon}>
            <Emoji symbol={'😀'} />
         </div>
         <div className={classes.body}>
            <h4 className={classes.title}>Create a React portfolio</h4>
            <p className={classes.desc}>00:00</p>
         </div>
      </div>
   );
};

export default TaskCard;
