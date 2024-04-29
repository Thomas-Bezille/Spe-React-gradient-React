import ColorButtons from '../ColorButtons/ColorButtons';
import Counter from '../Counter/Counter';
import DirectionButtons from '../DirectionButtons/DirectionButtons';
import Gradient from '../Gradient/Gradient';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Counter />
      <ColorButtons />
      <Gradient />
      <DirectionButtons />
    </div>
  );
}

export default App;
