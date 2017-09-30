import React from 'react';
import BaseComponent from 'components/BaseComponent';
import Dialog from 'components/Widgets/Dialog'

// Dialogs page
export default class Dialogs extends BaseComponent {
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        const style= {
            width: '100%',
            height: '100%'
        };

        return (
            <div style={style}>
                <Dialog />
            </div>
        );
    }
}
