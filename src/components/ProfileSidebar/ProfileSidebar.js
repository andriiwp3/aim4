import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import UserCard from '../UserCard/UserCard';
import { ReactComponent as SettingsIcon } from '../../icons/settings.svg';
import { ReactComponent as LogoutIcon } from '../../icons/logout.svg';
import appClasses from '../../App.module.scss';
import 'react-calendar/dist/Calendar.css';
import classes from './ProfileSidebar.module.scss';
import TaskCard from '../TaskCard/TaskCard';

const ProfileSidebar = props => {
   return (
      <aside className={`${classes.ProfileSidebar} ${appClasses['profile-sidebar']} ${appClasses.section}`}>
         <div className={classes.row}>
            <div className={classes.header}>
               <h2 className="title">My profile</h2>
               <div className={classes['actions-icons']}>
                  <Link to="/settings">
                     <SettingsIcon />
                  </Link>
                  <Link to="/">
                     <LogoutIcon />
                  </Link>
               </div>
            </div>
         </div>
         <div className={classes.row}>
            <UserCard className={appClasses.item} />
         </div>
         <div className={classes.row}>
            <div className={appClasses.item}>
               <h2 className="title">My tasks</h2>
               <Calendar className={classes.calendar} />
					<div className={classes.tasks}>
						<TaskCard className={classes['task-card']} />
						<TaskCard className={classes['task-card']} />
						<TaskCard className={classes['task-card']} />
						<TaskCard className={classes['task-card']} />
						<TaskCard className={classes['task-card']} />
						<TaskCard className={classes['task-card']} />
						<TaskCard className={classes['task-card']} />
						<TaskCard className={classes['task-card']} />
						<TaskCard className={classes['task-card']} />
					</div>
            </div>
         </div>
      </aside>
   );
};

export default ProfileSidebar;
