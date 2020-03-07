import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/common/Header';
import ExpDashPage from '../components/home/ExpDashPage';
import AddExpPage from '../components/add/AddExpPage';
import EditPage from '../components/edit/EditPage';
import HelpPage from '../components/help/HelpPage';
import ErrorPage from '../components/error/ErrorPage';


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path='/' component={ExpDashPage} exact={true}/>       
            <Route path='/add' component={AddExpPage} />
            <Route path='/edit/:id' component={EditPage} />
            <Route path='/help' component={HelpPage} />
            <Route component={ErrorPage} />
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;


