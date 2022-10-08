// import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
        Hackathon-seson2-data-analysis
        </p>

      </header>
      <body className='App-body'>
      <Dashboard />
      </body>
      <footer className="App-footer">
        BSMx team
      </footer>
    </div>
  );
}

export default App;
