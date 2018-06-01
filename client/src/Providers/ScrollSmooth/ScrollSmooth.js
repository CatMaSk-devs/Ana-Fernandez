import CONSTANTS from '../../Constants/constants';

const ScrollSmooth = () => {
  return window.scroll({
    top: 0,
    left: 0,
    behavior: CONSTANTS.SCROLL_SMOOTH.BEHAVIOR
  });
}

export default ScrollSmooth