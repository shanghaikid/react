import React from 'react';
import BaseComponent from '../../BaseComponent';

// Dialog
export default class WindowMemoryViewer extends BaseComponent {
    init() {
        // class
        this.baseClassName = `windowMemoryViewer`;
    }

    render() {
        const {jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize} = this.props;

        return (
            <div className={this.className}>
                <span className="label">Javascript Heap Size Limit:</span> <span>{jsHeapSizeLimit}</span>
                <span className="label">Total Javascript Heap Size:</span> <span>{totalJSHeapSize}</span>
                <span className="label">Used Javascript Heap Size:</span> <span>{usedJSHeapSize}</span>
            </div>
        );
    }
}
