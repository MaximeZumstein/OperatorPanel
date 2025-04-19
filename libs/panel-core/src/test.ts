import { createButton } from './lib/elements/button.js';
import { createLed } from './lib/elements/led.js';
import { panel } from './lib/panel-core.js';

panel({
  elements: [
    createLed({ pin: 13, blinking: true }),
    createButton({
      pin: 8,
      onPress: () => {
        console.log('Dispatch !');
      },
    }),
  ],
  onReady: () => {
    console.log('READY !');
  },
});
