import React from 'react'
import BaseComponent from '../../BaseComponent';
import PropTypes from 'prop-types';

class TreeNode extends BaseComponent {
    constructor(...args) {
        super(...args);
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
            this.props.onTreeNodeClick(this.props);
        }
    }

    render() {
        let {id, label, url, children, onTreeNodeClick, focusId} = this.props,
            expand = this.state.expand;
        return (
            <li key={id} 
                className={(focusId === id && !children) ? this.props.focusClass : (expand ? this.props.expandoClass : this.props.expandoClass)}
                onClick={this.handleEvent.bind(this)}>
                <a href={url ? url : '#'}>{label}</a>
                {children && expand ? <ul>{children.map(c => <TreeNode focusId={focusId} onTreeNodeClick={onTreeNodeClick} {...c} />)}</ul>: ''}
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
    constructor(...args) {
        super(...args);
        this.state = {
            focusId: -1
        };
    }

    onTreeNodeClick(treeNode) {
        let {id, children} = treeNode,
            {onTreeNodeClick} = this.props,
            focusId = (children && children[0]) ? children[0].id : id;

        onTreeNodeClick(treeNode);

        this.setState({ focusId });
    }

    render() {
        return (
            <div {...this.props}>
                <ul>{this.props.data.map(c => <TreeNode focusId={this.state.focusId} onTreeNodeClick={this.onTreeNodeClick.bind(this)} {...c} />)}</ul>
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