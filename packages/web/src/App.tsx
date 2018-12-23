import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { Button } from '@monorepo/ui';
import { theme } from '@monorepo/ui';

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
            <Button />
          </p>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
