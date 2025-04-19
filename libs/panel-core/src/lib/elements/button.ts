import { Board, Button } from 'johnny-five';
import { PanelElement } from './index.js';

export interface ButtonElement extends PanelElement {
  down: boolean;
}

const createButton: Button = ({ pin, onPress }) => {
  let button: Button = undefined;

  const onBoardReady = (board: Board) => {
    button = new Button({ pin, board, isPullup: true });
    button.on('press', onPress);
  };

  const clean = () => {
    return;
  };

  return {
    id: 'test',
    onBoardReady,
    clean,
  };
};

export { createButton };
