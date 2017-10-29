import React from 'react';
import BaseComponent from '../../BaseComponent';
import PropTypes from 'prop-types';
import { States } from '../../../Constants';
import { getClsName } from '../../../utils';

export default class ToolTip extends BaseComponent {
    init() {
        this.baseClassName = `tooltip`;
    }

    render() {
        const {isOpen, tooltip, tooltipPositions, tooltipPosition, tooltipState} = this.props,
            cls = getClsName(this.className, tooltipPositions[tooltipPosition], tooltipState);

        return (<div className={cls}>{tooltip}</div>)
    }
}

ToolTip.defaultProps = {
    opacity: .5,
    tooltipPositions: {
        'after': 'after',
        'before': 'before',
        'above': 'above',
        'below': 'below',
        'below-centered': 'below-centered',
        'above-centered': 'above-centered'
    },
    tooltip: '',
    tooltipPosition: 'above',
    tooltipState: States['NORMAL']
};

ToolTip.propTypes = {
    opacity: PropTypes.number,
    isOpen: PropTypes.bool,
    tooltip: PropTypes.string,
    tooltipPosition: PropTypes.string,
    tooltipPositions: PropTypes.object,
    tooltipState: PropTypes.string
};
