import React from 'react';
import BaseComponent from 'components/BaseComponent';
import Button from 'components/Form/Button';
import TextInput from 'components/Form/TextInput';

import Header from 'components/BasicUI/Header';

const longTooltip = `So, yesterday, being another rainy day in Chicago, I grabbed a digital rental of Frankenweenie.
A few years ago, my wife and I saw it when it was in theaters. And we loved it. Being that Rory loves dogs (like, obsessively so), I figured she’d enjoy it too.
Little did I know what I was in store for…, So, yesterday, being another rainy day in Chicago, I grabbed a digital rental of Frankenweenie.
A few years ago, my wife and I saw it when it was in theaters. And we loved it. Being that Rory loves dogs (like, obsessively so), I figured she’d enjoy it too.
Little did I know what I was in store for…`;
const tooltip = `This is normal tooltip`;
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
                <Button text="Tooltip position: after" tooltip={tooltip} tooltipPosition="after" />
                <Button text="Tooltip position: before" tooltip={tooltip} tooltipPosition="before" />
                <Button text="Tooltip position: above" tooltip={tooltip} tooltipPosition="above" />
                <Button text="Tooltip position: below" tooltip={tooltip} tooltipPosition="below"/>
                <Button text="Tooltip position: below-centered" tooltip={tooltip} tooltipPosition="below-centered"/>
                <Button text="Tooltip position: above-centered" tooltip={tooltip} tooltipPosition="above-centered" />
                <Button text="Tooltip can be enterred" tooltipCanBeEntered={true} tooltip={tooltip}/>
                <Button text="Tooltip state is always WARNING" tooltip={tooltip} tooltipState="WARNING" />
                <Button text="Help Tips" />
                <Button text="Really Long tooltip" tooltip={longTooltip} tooltipCanBeEntered={true} />
                <Button text="One-liner with inline markup" tooltip={oneLineWithInlineMarkup} />
            </div>
        );
    }
}
