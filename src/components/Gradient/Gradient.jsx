const Gradient = () => {
  const firstColor = 'blue';
  const lastColor = '#F0F';

  const styleFirstSpan = {
    color: firstColor,
  };
  const styleLastSpan = {
    color: lastColor,
  };

  return (
    <>
      <div id="colors">
        <span style={styleFirstSpan}>{firstColor}</span> -{' '}
        <span style={styleLastSpan}>{lastColor}</span>
      </div>
      <div id="gradient" />
    </>
  );
};

export default Gradient;
