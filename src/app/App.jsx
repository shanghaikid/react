import React from 'react';
import BorderContainer from 'components/Layout/BorderContainer';
import Pane from 'components/Layout/Pane';
import Splitter from 'components/Layout/Splitter';

export default class App extends React.Component {
    render() {
        return (
            <BorderContainer>
                <Pane className="leftPane" splitter="vertical" size={200} minSize={200} maxSize={500} sizeUnit="px" />
                <Pane className="rightPane" display="flex" direction="column">
                    <Pane splitter="horizontal" size={75} maxSize={80} />
                    <Pane />
                </Pane>
            </BorderContainer>
        );
    }
}
