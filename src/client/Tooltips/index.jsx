import React from 'react';
import BaseComponent from 'components/BaseComponent';
import Button from 'components/Form/Button';
import TextInput from 'components/Form/TextInput';

import Header from 'components/BasicUI/Header';

// Tooltips page
export default class Tooltips extends BaseComponent {
    init() {
        
    }

    render() {
        const style= {
            width: '100%',
            height: '100%'
        };

        return (
            <div style={style} className="tooltips">
                <Button text="Tooltip position: after" />
                <Button text="Tooltip position: before" />
                <Button text="Tooltip position: above" />
                <Button text="Tooltip position: below" />
                <Button text="Tooltip position: below-centered" />
                <Button text="Tooltip position: above-centered" />
                <Button text="Tooltip can be enterred" />
                <Button text="Tooltip state is always WARNING" />
                <Button text="Help Tips" />
                <Button text="Really Long tooltip" />
                <Button text="One-liner with inline markup" />
            </div>
        );
    }
}
