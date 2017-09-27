import React from 'react';
import BorderContainer from 'components/Layout/BorderContainer';
import Pane from 'components/Layout/Pane';
import Splitter from 'components/Layout/Splitter';

export default class App extends React.Component {
    render() {
        return (
            <BorderContainer>
                <Pane className="leftPane" splitter="vertical" />
                <Pane className="rightPane">
                    <Pane splitter="horizontal" />
                    <Pane />
                </Pane>
            </BorderContainer>
        );
    }
}
