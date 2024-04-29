import { useSelector } from 'react-redux';

const Gradient = () => {
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);
  const direction = useSelector((state) => state.direction);

  const styleFirstSpan = {
    color: firstColor,
  };
  const styleLastSpan = {
    color: lastColor,
  };
  const styleGradient = {
    background: `linear-gradient(${direction}, ${firstColor}, ${lastColor})`,
  };

  return (
    <>
      <div id="colors">
        <span style={styleFirstSpan}>{firstColor}</span> -
        <span style={styleLastSpan}>{lastColor}</span>
      </div>
      <div id="gradient" style={styleGradient} />
    </>
  );
};

export default Gradient;
