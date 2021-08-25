import { Route, Switch } from 'react-router-dom';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Dashboard from './components/Dashboard/Dashboard';
import ProfileSidebar from './components/ProfileSidebar/ProfileSidebar';
import appClasses from './App.module.scss'

const App = () => {
   return (
      <>
         <LeftSidebar />
         <main className={appClasses.main}>
            <Switch>
               <Route path="/" exact={true}>
                  <Dashboard />
               </Route>
            </Switch>
         </main>
			<ProfileSidebar />
      </>
   );
};

export default App;
