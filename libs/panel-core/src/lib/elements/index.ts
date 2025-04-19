import { Board } from 'johnny-five';

export interface PanelElement {
  id: string;

  clean: () => void;
  onBoardReady: (board: Board) => void;
}
