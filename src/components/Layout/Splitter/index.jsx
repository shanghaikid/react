import React from 'react'
import BaseComponent from '../../BaseComponent';
import PropTypes from 'prop-types';

export default class Splitter extends BaseComponent {
    init() {
        // properties
        this.baseClass = 'splitter';
    }

    render() {
        let {className, children, isVertical} = this.props,
            cls = this.baseClass + (`${isVertical ? ` vertical` : ' horizontal'}`);

        return (
            <div 
                {...this.props}
                className={cls}>
                </div>
        );
    }
}

Splitter.defaultProps = {
    isVertical: true
};

Splitter.propTypes = {
    isVertical: PropTypes.bool
};