import React from 'react'
import BaseComponent from '../../BaseComponent';
import ContentPane from '../ContentPane';
import PropTypes from 'prop-types';

export default class Switch extends BaseComponent {
    render() {
        const style = {
            width: '100%',
            height: '100%'
        };

        return (
            <div style={style} data-active-id={this.props.activeId}>
                {this.props.def.map(c => (
                    <ContentPane className={c.id === this.props.activeId ? this.props.activeId : 'hidden'}>
                        {c.component}
                    </ContentPane>)
                )}
            </div>
        );
    }
}

Switch.defaultProps = {
    className: 'contentPane',
    def: []
};

Switch.propTypes = {
    className: PropTypes.string,
    def: PropTypes.array,
    activeId: PropTypes.string
};