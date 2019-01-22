import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

import { withBackgrounds } from '@storybook/addon-backgrounds';

storiesOf('BG Button', module)
  .addDecorator(
    withBackgrounds([
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ])
  )
  .add('with text', () => `<button>Click me</button>`);

