import { Area, AreaChart as Chart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const AreaChart = props => {
   const data = [
      {
         name: 'Feb',
         "Completed Tasks": 100,
      },
      {
         name: 'Mar',
         "Completed Tasks": 250,
      },
      {
         name: 'Apr',
         "Completed Tasks": 87,
      },
      {
         name: 'May',
         "Completed Tasks": 150,
      },
      {
         name: 'Jun',
         "Completed Tasks": 100,
      },
      {
         name: 'Jul',
         "Completed Tasks": 176,
      },
      {
         name: 'Aug',
         "Completed Tasks": 123,
      },
   ];

   return (
      <ResponsiveContainer width="100%" height={250}>
         <Chart data={data} margin={props.margin}>
            <defs>
               <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f7b84f" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#f7b84f" stopOpacity={0} />
               </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="Completed Tasks" stroke="#f7b84f" fillOpacity={1} fill="url(#colorUv)" />
         </Chart>
      </ResponsiveContainer>
   );
};

export default AreaChart;
