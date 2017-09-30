import React from 'react';
import BorderContainer from 'components/Layout/BorderContainer';
import Pane from 'components/Layout/Pane';
import Splitter from 'components/Layout/Splitter';
import TreeView from 'components/Layout/TreeView';
import Switch from 'components/Layout/Switch';
import BaseComponent from 'components/BaseComponent';

export default class App extends BaseComponent {
    init() {
        this.state = {
            activeId: 'mon'
        };
    }

    componentDidMount() {
        let hash = window.location.hash.split('/'),
            activeId = hash[hash.length - 1].replace('#', '');

        this.setState({
            activeId
        });
    }

    onTreeNodeClick(node, state) {
        let {expand} = state;

        if (typeof node.children === 'undefined') {
            this.setState({
                activeId: node.id
            });
        }
    }

    render() {
        return (
            <BorderContainer>
                <Pane className="leftPane" splitter="vertical" size={200} minSize={200} maxSize={500} sizeUnit="px" >
                    <TreeView def={this.props.nav} activeId={this.state.activeId} onTreeNodeClick={this.onTreeNodeClick.bind(this)}/>
                </Pane>
                <Pane className="rightPane" display="flex" direction="column">
                    <Pane splitter="horizontal" size={75} maxSize={80}>
                        <Switch def={this.props.pages} activeId={this.state.activeId} />
                    </Pane>
                    <Pane />
                </Pane>
            </BorderContainer>
        );
    }
}
