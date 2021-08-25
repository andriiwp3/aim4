import classes from './StatsInNum.module.scss';
import { ReactComponent as StatIcon } from '../../icons/statistics.svg';

const StatsInNum = ({ className, statistic }) => {
   return (
      <div className={`${classes.StatsInNum} ${className}`}>
         <div className={classes.icon}>
            <StatIcon fill="#1f1f1f" />
         </div>
         <div className={classes.body}>
            <span className={classes.num}>{statistic.number}</span>
            <p className={classes.title}>{statistic.title}</p>
         </div>
      </div>
   );
};

export default StatsInNum;
