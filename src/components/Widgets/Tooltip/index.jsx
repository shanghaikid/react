import React from 'react';
import BaseComponent from '../../BaseComponent';
import PropTypes from 'prop-types';
import { States, zIndexs} from '../../../Constants';
import { getClsName } from '../../../utils';

export default class ToolTip extends BaseComponent {
    init() {
        this.baseClassName = `tooltip`;
    }

    render() {
        const {isOpen, tooltip, tooltipPositions, tooltipPosition, tooltipState, left, top, width, height, maxHeight} = this.props,
            cls = getClsName(this.className, tooltipPositions[tooltipPosition], States[tooltipState]),
            style = {
                position: 'absolute',
                left: left,
                top: top,
                zIndex: zIndexs.Tooltip,
                width: width + 'px',
                minHeight: height + 'px',
                maxHeight: maxHeight + 'px'
            };

        return (<div className={cls} style={tooltip ? style : {}} dangerouslySetInnerHTML={{__html: tooltip}} />)
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
    tooltipPosition: 'after',
    tooltipState: 'NORMAL',
    left: -99999,
    top: -99999,
    width: 200,
    height: 22,
    maxHeight: 100
};

ToolTip.propTypes = {
    opacity: PropTypes.number,
    isOpen: PropTypes.bool,
    tooltip: PropTypes.string,
    tooltipPosition: PropTypes.string,
    tooltipPositions: PropTypes.object,
    tooltipState: PropTypes.string,
    left: PropTypes.number,
    top: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    maxHeight: PropTypes.number
};
