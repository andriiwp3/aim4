import UserIcon from '../../icons/user.svg';
import classes from './UserCard.module.scss';
import { determinePartOfTheDay } from '../../helpers/helpers';

const UserCard = ({ className }) => {
   return (
      <div className={`${classes.UserCard} ${className}`}>
         <div className={classes.avatar}>
            <img src={UserIcon} alt="Andrew`s avatar" />
         </div>
         <div className={classes.body}>
            <h2 className={classes.title}>
               <p>Good {determinePartOfTheDay()}, <b>Andrew</b>!</p>
               You have {5} new tasks
            </h2>
            <span className={classes.subtitle}>Good luck!</span>
         </div>
      </div>
   );
};

export default UserCard;
