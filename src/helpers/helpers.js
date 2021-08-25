export const determinePartOfTheDay = () => {
   const date = new Date().getHours();
   return date < 10 ? 'morning' : date < 21 ? 'day' : 'night';
};