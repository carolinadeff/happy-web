import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import Success from './pages/Success';
import Delete from './pages/Delete';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import RedefinePassword from './pages/RedefinePassword';
import Dashboard from './pages/Dashboard';


function Routes() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route path="/redefine" component={RedefinePassword} />
            <Route path="/app" component={OrphanagesMap} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/orphanages/create" component={CreateOrphanage} />
            <Route path="/orphanages/success" component={Success} />
            <Route path="/orphanages/delete" component={Delete} />
            <Route path="/orphanages/:id" component={Orphanage} />
            
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;