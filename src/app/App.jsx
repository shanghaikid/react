import React from 'react';
import BorderContainer from 'components/Layout/BorderContainer';
import Pane from 'components/Layout/Pane';
import Splitter from 'components/Layout/Splitter';
import TreeView from 'components/Layout/TreeView';

let nav = [
    {id: 'mon', label: 'Monitoring', url: '#1', value: 1},
    {id: 'form', label: 'Form Widgets', url: '#2', value: 2},
    {id: 'widgets', label: 'Widgets', expand: true, children: [
        {id: 'dialogs', label: 'Dialogs', url: '#3', value: 3},
        {id: 'wizard', label: 'Wizard', url: '#4', value: 4},
        {id: 'tooltip', label: 'Tooltip', url: '#5', value: 5}
    ]}
];

export default class App extends React.Component {

    onTreeNodeClick(node) {
        console.log('expand node', node);
    }

    render() {
        return (
            <BorderContainer>
                <Pane className="leftPane" splitter="vertical" size={200} minSize={200} maxSize={500} sizeUnit="px" >
                    <TreeView data={nav} onTreeNodeClick={this.onTreeNodeClick.bind(this)}/>
                </Pane>
                <Pane className="rightPane" display="flex" direction="column">
                    <Pane splitter="horizontal" size={75} maxSize={80} />
                    <Pane />
                </Pane>
            </BorderContainer>
        );
    }
}
