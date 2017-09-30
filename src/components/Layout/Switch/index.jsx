import React from 'react'
import BaseComponent from '../../BaseComponent';
import ContentPane from '../ContentPane';
import PropTypes from 'prop-types';

export default class Switch extends BaseComponent {
    init() {
        this.baseClassName = 'switch';
    }

    render() {
        const style = {
            width: '100%',
            height: '100%'
        };

        return (
            <div style={style} data-active-id={this.props.activeId} className={this.className}>
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
    def: []
};

Switch.propTypes = {
    def: PropTypes.array,
    activeId: PropTypes.string
};