import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

import centered from '@storybook/addon-centered/html';

storiesOf('Centered', module)
  .addDecorator(centered)
  .add('button', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Hello Button';
    button.addEventListener('click', e => console.log(e));
    return button;
  })
  .add('Centered Div', () => `<div>New Element</div>`);

