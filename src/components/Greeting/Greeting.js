import { ReactComponent as ManWorking } from '../../icons/working.svg';
import { determinePartOfTheDay } from '../../helpers/helpers';
import classes from './Greeting.module.scss';

const Greeting = ({ username, className }) => {
   const partOfTheDay = determinePartOfTheDay();
   return (
      <div className={`${classes.Greeting} ${className}`}>
         <div className={classes.body}>
            <p className={classes.title}>
               Good {partOfTheDay}, {username}!
            </p>
            <h1 className={classes.subtitle}>Check your daily Tasks & Schedule</h1>
            <span className={classes.mantra}>Have a good {partOfTheDay === 'night' ? partOfTheDay : 'day'}</span>
         </div>
         <div className={classes.icon}>
            <ManWorking />
         </div>
      </div>
   );
};

export default Greeting;
