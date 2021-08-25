import AreaChart from '../Charts/AreaChart/AreaChart';
import Greeting from '../Greeting/Greeting';
import RadialChart from '../Charts/RadialChart/RadialChart';
import StatsInNum from '../StatsInNum/StatsInNum';
import classes from './Dashboard.module.scss';
import appClasses from '../../App.module.scss';

const Dashboard = props => {

   return (
      <div className={appClasses.section}>
         <div className={classes.row}>
            <h1 className="title">Dashboard</h1>
         </div>
         <div className={classes.row}>
            <Greeting username="Andrew" className={` ${appClasses.item}`} />
         </div>
         <div className={`${classes.row} ${classes.row_flex}`}>
            <div className={classes.col}>
               <div className={`${classes.row} ${classes.statistic}`}>
                  <StatsInNum
                     className={`${classes.statistic__item} ${appClasses.item}`}
                     statistic={{ number: 473, title: 'Completed' }}
                  />
                  <StatsInNum
                     className={`${classes.statistic__item} ${appClasses.item}`}
                     statistic={{ number: 3547, title: 'Scores (month)' }}
                  />
                  <StatsInNum
                     className={`${classes.statistic__item} ${appClasses.item}`}
                     statistic={{
                        number: 95,
                        title: 'Days with aim4',
                     }}
                  />
               </div>
               <div className={classes.row}>
                  <div className={`${classes.progress} ${appClasses.item}`}>
                     <h2 className="title">Activity</h2>
                     <AreaChart />
                  </div>
               </div>
            </div>
            <div className={classes.col}>
               <div className={`${classes.progress} ${classes.progress_daily} ${appClasses.item}`}>
                  <h2 className="title">Track your progress throughout the day</h2>
                  <RadialChart circleSize={260} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
