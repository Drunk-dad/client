import React from 'react';
import PropTypes from 'prop-types';
import s from './NavBar.module.css';

const NavBar = (props) => {
    const { children } = props;
    return <div className={s.root}>{children}</div>;
};

NavBar.propTypes = {
    children: PropTypes.node,
};

export default NavBar;
