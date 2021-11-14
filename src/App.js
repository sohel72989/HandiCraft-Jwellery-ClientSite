
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AllProducts from './pages/AllProducts/AllProducts';
import Dashboard from './pages/Dashboard/Dashboard';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router >
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/home/:productId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/allProducts">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
