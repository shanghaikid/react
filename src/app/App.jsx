import React from 'react';
import BorderContainer from 'components/Layout/BorderContainer';
import Pane from 'components/Layout/Pane';
import Splitter from 'components/Layout/Splitter';
import TreeView from 'components/Layout/TreeView';
import Switch from 'components/Layout/Switch';
import Header from 'components/BasicUI/Header';
import BaseComponent from 'components/BaseComponent';

const nav = [
    {id: 'mon', label: 'Monitoring', url: '/#mon', component: <Header test="Monitoring" />},
    {id: 'form', label: 'Form Widgets', url: '/#form', component: <Header text="Forms Widget" />},
    {id: 'widgets', label: 'Widgets', expand: true, children: [
        {id: 'dialogs', label: 'Dialogs', url: '/#widgets/dialogs', component: <Header test="Dialogs" />},
        {id: 'wizard', label: 'Wizard', url: '/#widgets/wizard', component: <Header test="Wiard" />},
        {id: 'tooltip', label: 'Tooltip', url: '/#widgets/tooltip', component: <Header test="Tooltips" />}
    ]}
];

const pages = (nav => {
    let res = [];
    for (let i = 0; i < nav.length; i++) {
        let n = nav[i];
        if (n.children) {
            n.children.forEach(n => nav.push(n));
        } else {
            res.push(n);
        }
    }
    return res;
})(Array.from(nav));

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
                    <TreeView def={nav} activeId={this.state.activeId} onTreeNodeClick={this.onTreeNodeClick.bind(this)}/>
                </Pane>
                <Pane className="rightPane" display="flex" direction="column">
                    <Pane splitter="horizontal" size={75} maxSize={80}>
                        <Switch def={pages} activeId={this.state.activeId} />
                    </Pane>
                    <Pane />
                </Pane>
            </BorderContainer>
        );
    }
}
