import './style.scss';
import { smoothScroll } from './scriptPartials/smoothScroll';
import { disableAnim } from './scriptPartials/disableAnim';

const run = () => {
  disableAnim();
  smoothScroll();
};

run();
