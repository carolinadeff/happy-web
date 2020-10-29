import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext'

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import EditOrphanage from './pages/EditOrphanage';
import Success from './pages/Success';
import Delete from './pages/Delete';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import RedefinePassword from './pages/RedefinePassword';
import Dashboard from './pages/Dashboard';


function PrivateRoute({ ...rest }){
    const { authenticated } = useContext(AuthContext);

    if(!authenticated){
        return <Redirect to='/login' />
    }
    return <Route {...rest} />
} 


function Routes() {
    return(
        <BrowserRouter>
        <Switch>
            
            <Route path="/" exact component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route path="/redefine" component={RedefinePassword} />
            <Route path="/app" component={OrphanagesMap} />

            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/create" component={CreateOrphanage} />
            <PrivateRoute path="/success" component={Success} />
            <PrivateRoute path="/edit/:id" component={EditOrphanage} />
            <PrivateRoute path="/delete/:id" component={Delete} />

            <Route path="/view/:id" component={Orphanage} />
            
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;