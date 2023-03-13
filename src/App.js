import logo from './logo.svg';
import './App.css'; //css경로
import { useState } from 'react'; //state문법

function App() {

  let post = 'react란?';
  let [title, b] = useState( ['Day1','Day2','Day3'] );
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color:'blue', fontSize:'20px'} }>reactprac</h4>
      </div>
      <div className="list">
        <h4>{ title[0] }</h4>
        <p>0314</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>0314</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>0314</p>
      </div>

      <h4>{ post }</h4>
    </div>
  );
}

export default App;
