// import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';

function App() {
  const user = {
    firstname: "Afiq", 
    lastname: "Idham",
  };

  return <div>
    <h1>Time Now:</h1>
    <h2>{Clock()}</h2>
    </div>;
}

export default App;
