import React from 'react';
import BaseComponent from '../../BaseComponent';

export default class Header extends BaseComponent {
    init() {
        this.state = {
            test: Math.random()
        };
    }
    render() {
        return (<h1 gid={this.state.test}>{this.props.text}</h1>)
    }
}
