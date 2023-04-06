import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ActivePage from './components/ActiveView/ActivePage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
       <ActivePage />
      </main>
    </div>
  );
}

export default App;
