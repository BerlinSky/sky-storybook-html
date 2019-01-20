import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

import './main.scss';

storiesOf('Demo', module)
  .add('heading', () => '<h1>Hello World</h1>')
  .add('button', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Hello Button';
    button.addEventListener('click', e => console.log(e));
    return button;
  })
  .add('button Green', () => {
    const buttonGreen = document.createElement('button');
    buttonGreen.type = 'button';
    buttonGreen.innerText = 'Hello Button';
    buttonGreen.addEventListener('click', e => console.log(e));
    buttonGreen.classList.add('greenButton')
    return buttonGreen;
  });
