import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './core/Home';
//import Menu from './core/Menu';
//import Signin from './user/Signin';
//import Signup from './user/Signup';
import About from './user/About';
//import Library from './user/Library';
//import Profile from './user/Profile';
//import Users from './user/users';

const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/user/edit:userId" component={EditProfile} />
            <Route exact path="/user/:userId" component={Profile} />
        </Switch>
    </div>
);

export default MainRouter;