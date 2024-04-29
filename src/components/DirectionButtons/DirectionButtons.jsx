import { useDispatch } from 'react-redux';
import { changeDirection } from '../../actions/gradient';

const DirectionButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        id="toLeft"
        onClick={() => {
          const action = changeDirection('270deg');
          dispatch(action);
        }}
      >
        to left
      </button>
      <button
        type="button"
        className="button"
        id="toRight"
        onClick={() => {
          const action = changeDirection('90deg');
          dispatch(action);
        }}
      >
        to right
      </button>
    </div>
  );
};

export default DirectionButtons;
