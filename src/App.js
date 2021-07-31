import './App.css';
import Color from './color-code'
import { render } from '@testing-library/react';

function App() {
  let randomColor = () => {
  let red = Math.round(Math.random() * 255)
  let green = Math.round(Math.random() * 255)
  let blue = Math.round(Math.random() * 255)
  return {red: red, green: green, blue: blue};
}
  
  return (
    <div className="App">
      <header className="App-header">
    <Color color={randomColor()}/>
    </header>
    </div>
  )
}

export default App;
