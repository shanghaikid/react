import React from 'react';
import BaseComponent from 'components/BaseComponent';

// Dialogs page
export default class Monitoring extends BaseComponent {
    init() {
        let source = new EventSource("//localhost:3000/seed");
        this.state = {
            data: {time: Date.now(), value: 1}
        };
        source.addEventListener('message', e => {
            let data = JSON.parse(e.data);

            this.state.data = data;
        }, false);

        source.addEventListener('open', function(e) {
          // Connection was opened.
          console.log('it is opened')
        }, false);

        source.addEventListener('error', function(e) {
            if (e.readyState == EventSource.CLOSED) {
                // Connection was closed.
            }
        }, false);
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
