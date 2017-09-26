import React from 'react';
import BorderContainer from 'components/Layout/BorderContainer';
import Pane from 'components/Layout/Pane';
import Splitter from 'components/Layout/Splitter';

export default class App extends React.Component {
    render() {
        return (
            <BorderContainer>
                <Pane className="leftPane" spliter={<Splitter isVertical={true} />} maxSize="30"></Pane>
                <Pane className="rightPane"></Pane>
            </BorderContainer>
        );
    }
}
