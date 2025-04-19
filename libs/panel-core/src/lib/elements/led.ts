import { Board, Led } from 'johnny-five';
import { PanelElement } from './index.js';

export interface LedElement extends PanelElement {
  blink: (blink: boolean, speed: number) => void;
}

const createLed: LedElement = ({ pin, blinking = false }) => {
  let led: Led = undefined;
  let blinkingSpeed = 500;

  const blink = (blink = true, speed = 500) => {
    blinking = blink;
    blinkingSpeed = speed;
    if (!led) return;

    if (blink) led.blink(speed);
    else led.off();
  };

  const onBoardReady = (board: Board) => {
    led = new Led({ pin, board });
    if (blinking) led.blink(blinkingSpeed);
  };

  const clean = () => {
    if (led) led.off();
  };

  return {
    id: 'test',
    onBoardReady,
    clean,
    blink,
  };
};

export { createLed };
