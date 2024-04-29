const Gradient = () => {
  const firstColor = '#DE4AF5';
  const lastColor = '#76FF12';
  const direction = '90deg';

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
