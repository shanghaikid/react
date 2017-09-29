import React from 'react';
import BaseComponent from '../../BaseComponent';

export default class Header extends BaseComponent {
    init() {
        this.state = {
            test: Math.random()
        };
    }
    render() {
        return (<h1>{this.props.text} {this.state.test}</h1>)
    }
}
