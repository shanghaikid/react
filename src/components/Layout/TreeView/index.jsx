import React from 'react'
import BaseComponent from '../../BaseComponent';
import PropTypes from 'prop-types';

class TreeNode extends BaseComponent {
    init() {
        this.state = {
            expand: false
        };
    }

    componentDidMount() {
        this.setState({
            expand: this.props.expand
        });
    }

    onClick(e) {
        e.stopPropagation();
        if (typeof this.props.children !== 'undefined' && e.target.nodeName === 'A') {
            this.setState({
                expand: !this.state.expand
            });
        }

        if (typeof this.props.onTreeNodeClick !== 'undefined') {
            this.props.onTreeNodeClick(this.props, this.state);
        }
    }

    render() {
        let {id, label, url, children, onTreeNodeClick, activeId} = this.props,
            expand = this.state.expand;

        return (
            <li key={id} 
                className={(activeId === id && !children) ? this.props.focusClass : (expand ? this.props.expandoClass : this.props.expandoClass)}
                onClick={this.handleEvent.bind(this)}>
                <a href={url ? url : 'javascript:void(0)'}>{label}</a>
                {children && expand ? <ul>{children.map(c => <TreeNode activeId={activeId} onTreeNodeClick={onTreeNodeClick} {...c} />)}</ul>: ''}
            </li>
        );
    }
}

TreeNode.defaultProps = {
    focusClass: 'focused',
    expandoExpandClass: 'expand',
    expandoClass: 'fold'
};

TreeNode.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    onTreeNodeClick: PropTypes.func,
    url: PropTypes.string,
    children: PropTypes.array,
    expand: PropTypes.bool,
    focusId: PropTypes.string,
    focusClass: PropTypes.string,
    expandoClass: PropTypes.string,
    expandoClass: PropTypes.string
};

export default class TreeView extends BaseComponent {
    onTreeNodeClick(treeNode, state) {
        let {id, children} = treeNode,
            {onTreeNodeClick} = this.props,
            {expand} = state;

        // callback
        onTreeNodeClick(treeNode, state);

        // if no selection or no children, focus target
        if (!children || this.props.activeId === -1) {
            this.setState({ activeId: id });
        }
    }

    render() {
        return (
            <div {...this.props}>
                <ul>{this.props.def.map(c => <TreeNode activeId={this.props.activeId} onTreeNodeClick={this.onTreeNodeClick.bind(this)} {...c} />)}</ul>
            </div>
        );
    }
}

TreeView.defaultProps = {
    className: 'treeView'
};

TreeView.propTypes = {
    onTreeNodeClick: PropTypes.func,
    className: PropTypes.string
};