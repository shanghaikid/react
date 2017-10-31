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
        const {isOpen, tooltip, state, left, top, width, height, maxHeight, opacity, zIndex} = this.props,
            cls = getClsName(this.className, state),
            style = {
                position: 'absolute',
                left: left,
                top: top,
                zIndex: zIndex,
                width: width + 'px',
                minHeight: height + 'px',
                maxHeight: maxHeight + 'px',
                opacity
            };

        return (<div onMouseEnter={this.handleEvent} onMouseOver={this.handleEvent} onMouseLeave={this.handleEvent} className={cls} style={tooltip ? style : {}} dangerouslySetInnerHTML={{__html: tooltip}} />)
    }
}

ToolTip.defaultProps = {
    opacity: 1,
    tooltip: '',
    left: -99999,
    top: -99999,
    width: 200,
    height: 14,
    maxHeight: 100,
    state: 'normal',
    zIndexs: zIndexs.Tooltip
};

ToolTip.propTypes = {
    opacity: PropTypes.number,
    tooltip: PropTypes.string,
    left: PropTypes.number,
    top: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    maxHeight: PropTypes.number,
    state: PropTypes.string
};
