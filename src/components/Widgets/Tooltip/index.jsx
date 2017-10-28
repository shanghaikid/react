import React from 'react';
import BaseComponent from '../../BaseComponent';
import PropTypes from 'prop-types';

export default class ToolTip extends BaseComponent {
    init() {
        this.baseClassName = `tooltip`;
    }

    render() {
        const {isOpen, tooltip, tooltipPositions, tooltipPosition} = this.props,
            cls = this.className + ' ' + tooltipPositions[tooltipPosition];

        return (<div className={cls}>{tooltip}</div>)
    }
}

ToolTip.defaultProps = {
    opacity: .5,
    tooltipPositions: {
        after: 'after',
        before: 'before',
        above: 'above',
        below: 'below',
        'below-centered': 'below-centered',
        'above-centered': 'above-centered'
    },
    tooltip: '',
    tooltipPosition: '',
    tooltipState: 'NORMAL'
};

ToolTip.propTypes = {
    opacity: PropTypes.number,
    isOpen: PropTypes.bool,
    tooltip: PropTypes.string,
    tooltipPosition: PropTypes.string,
    tooltipPositions: PropTypes.object,
    tooltipState: PropTypes.string
};
