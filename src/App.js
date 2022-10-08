// import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
        Hackathon-seson2-data-analysis
        </h1>

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
