import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StoreProvider from '../components/Store/Provider';
import RoutesPrivate from '../components/Routes/Private';
import Login from './Login';
import Home from './Home';
import DescCases from './DescCases';
import Dados from './Dados';
import './global.css';

const PagesRoot = () => (
    <Router>
        <StoreProvider>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/covid/desc" component={DescCases} />
                <Route path="/cadastro" component={Dados} />
                <RoutesPrivate path="/" component={Home} />
            </Switch>
        </StoreProvider>
    </Router>
);

export default PagesRoot;
