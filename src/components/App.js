import React from 'react';
import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <Typography component="h2" variant="h1" gutterBottom>
                h1. Heading
            </Typography>
        <p>
            EDIT <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>
      <Button variant="contained" color="primary">
      Hello World
    </Button>
      </header>
    </div>
  );
}

export default App;
