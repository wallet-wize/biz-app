import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Clients from './views/Clients';
import Photos from './views/Photos';
import Register from './views/Register';
import SignIn from './views/SignIn';
import AddShoot from './views/AddShoot';
import SingleShoot from './views/SingleShoot';
import AllShoots from './views/AllShoots';
import Schedule from './views/Schedule';
import {CssBaseline } from '@material-ui/core';

const App = () => {
    return (
        <>
        <CssBaseline/>
        <BrowserRouter>
        <Switch>
            <Route path = "/SignIn"><SignIn/> </Route>
            <Route path = "/Register"><Register/></Route>
            <Route path = "/Schedule"><Schedule/></Route>
            <Route path = "/AddShoot"><AddShoot/></Route>
            <Route path = "/AllShoots"><AllShoots/></Route>
            <Route path = "/SingleShoot"><SingleShoot/></Route>
            <Route path = "/Photos"><Photos/></Route>
            <Route path = "/Clients"><Clients/></Route>
            <Route path="/"><Home /></Route>
           
        </Switch>
        </BrowserRouter>
</>
    )
}

export default App;

