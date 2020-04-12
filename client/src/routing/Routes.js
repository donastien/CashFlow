import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import Alert from '../components/layout/Alert';
import Dashboard from '../components/dashboard/Dashboard';
import AddMonth from '../components/dashboard-forms/AddMonth';
import EditMonth from '../components/dashboard-forms/EditMonth';
import AddExpense from '../components/dashboard-forms/AddExpense';
import PrivateRoute from './PrivateRoute';
import Loads from '../components/load/Loads';
import AddLoad from '../components/load-forms/AddLoad';
import EditLoad from '../components/load-forms/EditLoad';
import NotFound from '../components/layout/NotFound';
import ForgotPassword from '../components/auth/ForgotPassword';
import ResetPassword from '../components/auth/ResetPassword';

const Routes = () => {
  return (
    <section className='container-fluid fontMontserrat'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/forgot_password' component={ForgotPassword} />
        <Route
          exact
          path='/reset_password/:reset_password_token'
          component={ResetPassword}
        />

        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/add-month' component={AddMonth} />
        <PrivateRoute exact path='/add-load' component={AddLoad} />
        <PrivateRoute exact path='/edit-month/:id' component={EditMonth} />
        <PrivateRoute exact path='/add-expense/:id' component={AddExpense} />
        <PrivateRoute exact path='/load' component={Loads} />
        <PrivateRoute exact path='/edit-load/:id' component={EditLoad} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
