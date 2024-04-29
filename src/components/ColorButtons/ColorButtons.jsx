import { useDispatch } from 'react-redux';
import { changeFirstColor, changeLastColor } from '../../actions/gradient';
import { randomHexColor } from '../../utils';

const ColorButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className="buttons group">
      <button
        className="button"
        type="button"
        id="randFirst"
        onClick={() => {
          const newColor = randomHexColor();

          const action = changeFirstColor(newColor);
          dispatch(action);
        }}
      >
        Random First
      </button>
      <button
        className="button"
        type="button"
        id="randAll"
        onClick={() => {
          let newColor = randomHexColor();
          let action = changeFirstColor(newColor);
          dispatch(action);

          newColor = randomHexColor();
          action = changeLastColor(newColor);
          dispatch(action);
        }}
      >
        Random All
      </button>
      <button
        className="button"
        type="button"
        id="randLast"
        onClick={() => {
          const newColor = randomHexColor();

          const action = changeLastColor(newColor);
          dispatch(action);
        }}
      >
        Random Last
      </button>
    </div>
  );
};

export default ColorButtons;
