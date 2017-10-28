import React from 'react';
import BaseComponent from 'components/BaseComponent';
import Button from 'components/Form/Button';
import TextInput from 'components/Form/TextInput';

import Header from 'components/BasicUI/Header';

const longTooltip = `So, yesterday, being another rainy day in Chicago, I grabbed a digital rental of Frankenweenie.
A few years ago, my wife and I saw it when it was in theaters. And we loved it. Being that Rory loves dogs (like, obsessively so), I figured she’d enjoy it too.
Little did I know what I was in store for…`;

const oneLineWithInlineMarkup = `<span class="colorful">I am colorful tooltip</span>`;
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
                <Button text="Tooltip position: after" tooltipPosition="after" />
                <Button text="Tooltip position: before" tooltipPosition="before" />
                <Button text="Tooltip position: above" tooltipPosition="above" />
                <Button text="Tooltip position: below" tooltipPosition="below"/>
                <Button text="Tooltip position: below-centered" tooltipPosition="below-centered"/>
                <Button text="Tooltip position: above-centered" tooltipPosition="above-centered" />
                <Button text="Tooltip can be enterred" />
                <Button text="Tooltip state is always WARNING" tooltipState="WARNING" />
                <Button text="Help Tips" />
                <Button text="Really Long tooltip" tooltip={longTooltip} />
                <Button text="One-liner with inline markup" tooltip={oneLineWithInlineMarkup} />
            </div>
        );
    }
}
