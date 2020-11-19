import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset, List, ListItem, Divider } from 'react95';
import original from 'react95/dist/themes/original';

const Profiler = React.unstable_Profiler;

const GlobalStyles = createGlobalStyle`

  ${styleReset}
`;

class App extends React.Component {
  callback(id, phase, actualTime, baseTime, startTime, commitTime) {
    console.log(
      'Id: ' +
        id +
        ' Phase: ' +
        phase +
        ' Actual Time: ' +
        actualTime +
        ' Base Time: ' +
        baseTime +
        ' Start Time: ' +
        startTime +
        ' Commit Time: ' +
        commitTime
    );
  }

  render() {
    return (
      <div>
        <GlobalStyles />
        <ThemeProvider theme={original}>
          <Profiler id='List' onRender={this.callback}>
            <List>
              <ListItem>🎤 Sing</ListItem>
              <ListItem>💃🏻 Dance</ListItem>
              <Divider />
              <ListItem disabled>😴 Sleep</ListItem>
            </List>
          </Profiler>
        </ThemeProvider>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

ReactDOM.render(<App />, rootElement);
