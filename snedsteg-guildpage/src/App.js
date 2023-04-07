import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomeView/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
       <HomePage />
      </main>
    </div>
  );
}

export default App;
