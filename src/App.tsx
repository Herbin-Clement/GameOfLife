import React from 'react';

import './App.css';

import Display from './Component/Display/Display';
import useWindowDimensions from './Hooks/dimension';

const App: React.FC = () => {

  const {width, height} = useWindowDimensions();

  // let w: number = width * 0.70 / 15;
  // let h: number = height * 0.70 / 15;
  let w = 55;
  let h = 30;
  console.log(w);
  console.log(h);

  return (
    <div className="App">
      <Display nbWidth={Math.floor(w)} nbHeight={Math.floor(h)}></Display>
    </div>
  );
}

export default App;
