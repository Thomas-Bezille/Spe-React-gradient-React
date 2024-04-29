import { useSelector } from 'react-redux';

const Counter = () => {
  const nbColorsFromState = useSelector((state) => state.nbColors);

  return <div id="nbColors">{nbColorsFromState} couleur(s) générée(s)</div>;
};

export default Counter;
