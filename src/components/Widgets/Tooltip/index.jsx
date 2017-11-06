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
        const {isOpen, tooltip, state, left, top, minWidth, maxWidth, minHeight, maxHeight, opacity, zIndex, padding} = this.props,
            cls = getClsName(this.className, state),
            defaultStyle = {
                display: 'none'
            },
            style = Object.assign({}, defaultStyle, {
                display: 'block',
                position: 'absolute',
                left: left,
                top: top,
                zIndex: zIndex,
                minWidth: minWidth + 'px',
                maxWidth: maxWidth + 'px',
                padding: padding + 'px',
                minHeight: minHeight + 'px',
                maxHeight: maxHeight + 'px',
                opacity
            });

        return (<div onMouseEnter={this.handleEvent} onMouseOver={this.handleEvent} onMouseLeave={this.handleEvent} className={cls} style={tooltip ? style : defaultStyle} dangerouslySetInnerHTML={{__html: tooltip}} />)
    }
}

ToolTip.defaultProps = {
    opacity: 1,
    tooltip: '',
    left: -99999,
    top: -99999,
    minWidth: 200,
    maxWidth: 200,
    minHeight: 20,
    maxHeight: 100,
    state: 'normal',
    padding: 5,
    zIndex: zIndexs.Tooltip
};

ToolTip.propTypes = {
    opacity: PropTypes.number,
    tooltip: PropTypes.string,
    left: PropTypes.number,
    top: PropTypes.number,
    minWidth: PropTypes.number,
    maxWidth: PropTypes.number,
    minHeight: PropTypes.number,
    maxHeight: PropTypes.number,
    padding: PropTypes.number,
    state: PropTypes.string
};
