import { Route, Switch } from 'react-router-dom';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Dashboard from './components/Dashboard/Dashboard';
import ProfileSidebar from './components/ProfileSidebar/ProfileSidebar';
import appClasses from './App.module.scss';
import Login from './components/Login/Login';
import Tasks from './components/Tasks/Tasks';

const App = () => {
   return (
      <>
         <LeftSidebar />
         <main className={appClasses.main}>
            <Switch>
               <Route path="/login" exact={true}>
                  <Login />
               </Route>
               <Route path="/tasks" exact={true}>
                  <Tasks />
               </Route>
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
