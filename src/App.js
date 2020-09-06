import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>

   
     <Router>
     <Switch>
      <PrivateRoute exact={true} path ="/">
        <Dashboard />
      </PrivateRoute>
       <Route exat path ="/login">
         <Login />
        </Route>
        <Route  path="*"> {/*this will always will match*/}
          <Error />
        </Route>
      </Switch>
     </Router>
    </AuthWrapper>
  );
}

export default App;
