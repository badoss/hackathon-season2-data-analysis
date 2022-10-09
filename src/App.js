// import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Typography variant="h4">Hackathon Data Analysis Visualization</Typography>
      </header>
      <body className='App-body'>
      <Dashboard />
      </body>
      <footer className="App-footer">
        <Typography>BSMx team</Typography>
        <a href='https://github.com/badoss/hackathon-season2-data-analysis.git'>Link github</a>
      </footer>
    </div>
  );
}

export default App;
