import { Board, Button, Led } from 'johnny-five';
import { PanelElement } from './elements/index.js';
import { LedElement } from './elements/led.js';
import { ButtonElement } from './elements/button.js';

type Panel = {
  isReady: boolean;
};

type PanelConfiguration = {
  elements: PanelElement[];
  onReady?: () => void;
  port?: string;
};

export function panel({ elements, onReady, port }: PanelConfiguration): Panel {
  const instance: Panel = {
    isReady: false,
  };
  const board = new Board({port});

  board.on('ready', () => {
    elements.forEach((element) => {
      element.onBoardReady(board);
    });

    instance.isReady = true;
    if (onReady) onReady();
  });

  board.on('exit', () => {
    elements.forEach((element) => {
      element.clean();
    });
  });
  

  return instance;
}
