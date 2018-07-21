import { random } from 'lodash';

export const randomBgColor = () => {
  const hue = random(0, 359);
  const saturation = `${random(0, 100)}%`;
  const lightness = `${random(30, 90)}%`;
  return {
    backgroundColor: `hsl(${hue}, ${saturation}, ${lightness})`,
  };
};
