import ColorButtons from '../ColorButtons/ColorButtons';
import Counter from '../Counter/Counter';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Counter />
      <ColorButtons />
      <div>Gradient</div>
      <div>directionButtons</div>
    </div>
  );
}

export default App;
