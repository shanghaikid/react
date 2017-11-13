import React from 'react';
import BaseComponent from 'components/BaseComponent';

// Dialogs page
export default class Monitoring extends BaseComponent {
    init() {
        let source = new EventSource("//localhost:3000/seed");

        source.addEventListener('message', function(e) {
            console.log(e.data);
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
                
            </div>
        );
    }
}
