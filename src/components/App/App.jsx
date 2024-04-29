import ColorButtons from '../ColorButtons/ColorButtons';
import Counter from '../Counter/Counter';
import Gradient from '../Gradient/Gradient';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Counter />
      <ColorButtons />
      <Gradient />
      <div>directionButtons</div>
    </div>
  );
}

export default App;
