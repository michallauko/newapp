import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Header</h1>
        <Navigation />
    </header>
);

const Navigation = () => (
    <div className="navigation">
        <NavLink activeClassName="is-active" className="navlink" to="/" exact={true}>Home</NavLink>
        <NavLink activeClassName="is-active" className="navlink" to="/add">Add expense!</NavLink>
        <NavLink activeClassName="is-active" className="navlink" to="/help">Help</NavLink>
    </div>
);

export default Header;