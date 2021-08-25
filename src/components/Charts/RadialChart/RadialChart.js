import classes from './RadialChart.module.scss';
import { PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts';

const RadialChart = ({ circleSize }) => {
   const data = [{ value: (100 * 3) / 5 }];

   return (
      <RadialBarChart
         width={circleSize}
         height={circleSize}
         cx={circleSize / 2}
         cy={circleSize / 2}
         innerRadius={90}
         outerRadius={120}
         barSize={25}
         data={data}
         startAngle={360}
         endAngle={0}>
         <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
         <RadialBar background clockWise dataKey="value" cornerRadius={6} fill="#f7b84f" />
         <text x={circleSize / 2} y={circleSize / 2} textAnchor="middle" dominantBaseline="middle" className={classes.text}>
            {`${3} / ${5}`}
         </text>
      </RadialBarChart>
   );
};

export default RadialChart;
