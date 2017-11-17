import React from 'react';
import BaseComponent from 'components/BaseComponent';

// Dialogs page
export default class Monitoring extends BaseComponent {
    init() {
        this.state = {
            data: {time: Date.now(), value: 1}
        };

        if (window.EventSource) {
            let source = new EventSource("//localhost:3000/seed");

            source.addEventListener('message', e => {
                this.setState({
                    data: JSON.parse(e.data)
                }, undefined, true);
            }, false);

            source.addEventListener('open', e => {
              // Connection was opened.
              console.log('it is opened !');
            }, false);

            source.addEventListener('error', e => {
                this.setState({data: {time: Date.now(), value: 'Something wrong, reconnecting.....'}});
            }, false);
        }
    }

    render() {
        const style= {
            width: '100%',
            height: '100%'
        };

        return (
            <div style={style}>
                {new Date(this.state.data.time).toLocaleString()} : {this.state.data.value}
            </div>
        );
    }
}
