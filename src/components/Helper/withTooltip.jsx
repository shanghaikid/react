import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { isEmpty } from '../../utils';
import Tooltip from '../Widgets/Tooltip';
import { States } from '../../Constants';

// shared tooltip state
let tooltipTimeout = null;

// withTooltip
export default function withTooltip(Component) {
    class ComponentWithTooltip extends Component {
        get focused() {
            return this.domNode.contains(document.activeElement);
        }

        init(...props) {
            super.init(...props);
            this.onTooltipMouseEnter = this.onTooltipMouseEnter.bind(this);
            this.onTooltipMouseLeave = this.onTooltipMouseLeave.bind(this);
        }

        componentDidMount(...args) {
            super.componentDidMount && super.componentDidMount(...args);

            // get tooltip container
            let tooltipContainer = document.body.querySelector('tooltip');
            // if not exist, create once
            if (!tooltipContainer) {
                tooltipContainer = document.createElement('tooltip');
                tooltipContainer.className = 'tooltip';

                document.body.appendChild(tooltipContainer);
            }
            // assign it to component local prop
            this.tooltipContainer = tooltipContainer;

            // bind events
            this.bindEvents();
        }

        bindEvents() {
            this.domNode.addEventListener('mouseenter', this);
            this.domNode.addEventListener('mouseleave', this);

        }

        componentWillUnmount(...args) {
            super.componentWillUnmount && super.componentWillUnmount(...args);
            document.body.removeChild(this.tooltipContainer);
            this.domNode.removeEventListener('mouseenter', this);
            this.domNode.removeEventListener('mouseleave', this);
        }

        getTooltipPos() {
            let {x, y, width, height} = this.domNode.getBoundingClientRect(),
                {scrollTop, scrollLeft} = document.documentElement,
                {tooltipPosition, tooltipPositions, minWidth:tooltipWidth, minHeight:tooltipHeight, padding} = this.props;

            let left = -9999,
                top = -9999;

            // correct the scrolling value
            x = x + scrollLeft;
            y = y + scrollTop;

            switch(tooltipPositions[tooltipPosition]) {
                case 'after':
                    left = x + width;
                    top = y;
                    break;

                case 'before':
                    left = x - tooltipWidth - padding * 2;
                    top = y;
                    break;

                case 'above':
                    left = x;
                    top = y - tooltipHeight - padding * 2;
                    break;

                case 'below':
                    left = x;
                    top = y + height;
                    break;

                case 'below-centered': 
                    left = x + ((width - tooltipWidth - padding * 2) / 2);
                    top = y + height;
                    break;

                case 'above-centered': 
                    left = x + ((width - tooltipWidth - padding * 2) / 2);
                    top = y - tooltipHeight - padding * 2;
                    break;
            }


            return {left, top};
        }

        onMouseEnter(e) {
            this.clearTimeout();
            const pos = this.getTooltipPos(),
                newProps = {
                    state: States[this.props.state],
                    onMouseEnter: this.onTooltipMouseEnter,
                    onMouseLeave: this.onTooltipMouseLeave
                };

            ReactDom.render(<Tooltip {...this.props} {...newProps} {...pos}/>, this.tooltipContainer);
        }

        onMouseLeave(e) {
            this.clearTooltip();
        }

        onTooltipMouseEnter(e) {
            this.clearTimeout();
            e.stopPropagation();
            this._onTooltip = this.props.tooltipCanBeEntered;
        }

        onTooltipMouseLeave(e) {
           this._onTooltip = false;
           this.clearTooltip();
        }

        clearTooltip() {
            if (!this._onTooltip) {
                tooltipTimeout = setTimeout(() => {
                    ReactDom.render(<Tooltip {...this.props} tooltip="" />, this.tooltipContainer);
                }, this.props.tooltipCanBeEntered ? 300: 1);
            }
        }

        clearTimeout() {
            if (tooltipTimeout) {
                window.clearTimeout(tooltipTimeout);
                tooltipTimeout = null;
            }
        }

        render() {
            return (
                    <Component
                    {...this.props}
                    ref={this.processRef}
                    />
            );
        }
    }

    ComponentWithTooltip.defaultProps = Object.assign({
        tooltipPositions: {
            'after': 'after',
            'before': 'before',
            'above': 'above',
            'below': 'below',
            'below-centered': 'below-centered',
            'above-centered': 'above-centered'
        },
        tooltipCanBeEntered: false,
        tooltipPosition: 'after',
        state: 'NORMAL'
    }, Tooltip.defaultProps, Component.defaultProps);

    ComponentWithTooltip.propTypes = Object.assign({
        tooltipPosition: PropTypes.string,
        tooltipPositions: PropTypes.object,
        tooltipCanBeEntered: PropTypes.bool,
        state: PropTypes.string,
    }, Tooltip.propTypes);

    return ComponentWithTooltip;
}
