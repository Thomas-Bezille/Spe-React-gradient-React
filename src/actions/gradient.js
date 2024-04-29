export const CHANGE_FIRST_COLOR = 'CHANGE_FIRST_COLOR';
export const CHANGE_LAST_COLOR = 'CHANGE_LAST_COLOR';

export const changeFirstColor = (newColor) => ({
  type: CHANGE_FIRST_COLOR,
  color: newColor,
});

export const changeLastColor = (newColor) => ({
  type: CHANGE_LAST_COLOR,
  color: newColor,
});
