import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../../BaseComponent';

export default class Header extends BaseComponent {
    init() {
        // class
        this.baseClassName = `header`;
    }
    render() {
        return (<h1 className={this.className}>{this.props.text}</h1>);
    }
}

Header.defaultProps = {
    text: ''
};

Header.defaultTypes = {
    text: PropTypes.string
};
