import appClasses from '../../App.module.scss';
import TaskCard from '../TaskCard/TaskCard';
import AddTaskForm from '../UI/Forms/AddTaskForm/AddTaskForm';
import classes from './Tasks.module.scss';

const Tasks = props => {
   return (
      <div className={`${appClasses.section} ${classes.Tasks}`}>
         <div className={classes.row}>
            <div className={classes.col}>
               <h1 className="title">Tasks List</h1>
               <ul className={classes.list}>
                  <TaskCard className={classes.task} />
                  <TaskCard className={classes.task} />
                  <TaskCard className={classes.task} />
                  <TaskCard className={classes.task} />
                  <TaskCard className={classes.task} />
                  <TaskCard className={classes.task} />
                  <TaskCard className={classes.task} />
               </ul>
            </div>

            <div className={classes.col}>
               <h1 className="title">Add Task</h1>
               <div className={classes['form-wrapper']}>
                  <AddTaskForm />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Tasks;
