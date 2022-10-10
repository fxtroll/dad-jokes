import NavBar from './components/NavBar'
import JokeBlock from './components/JokeBlock'
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <div className='App'>
        <JokeBlock />
      </div>
    </div>
  );
}

export default App;
