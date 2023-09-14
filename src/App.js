// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Clock from './components/Clock';

// function ButtonControl() {
// const [flag, setFlag] = useState(true);
// const {isButton, setIsOn} = useState(false);
// const handleOnClick = () => {
//   setIsOn(true);
//   setFlag(true);
// };
// const handleOffClick = () => {
//   setIsOn(false);
//   setFlag(false);
// };



function App() {
  const [flag, setFlag] = useState(true);
  const handleOnClick = () => {
      setFlag(true);
    };
    const handleOffClick = () => {
      setFlag(false);
    };
  const user = {
    firstname: "Afiq", 
    lastname: "Idham",
  };

let button;
if(flag) {
  button = <OnButton onClick = {handleOnClick}></OnButton>

} else {
  button = <OffButton onClick = {handleOffClick}></OffButton>
}

  return <div>
    <h1>Time Now:</h1>
    <h2>{flag ? <Clock/> : "No Clock Showed"}</h2>
    <button onClick={() => setFlag(!flag)}>{button}</button>
    </div>;

}

function OnButton(props) {
  return (
    <button onClick={props.OnButton}>Clock On</button>
  )
}

function OffButton(props) {
  return (
  <button onClick = {props.OffButton}>Clock Off</button>
  )
}


export default App;
