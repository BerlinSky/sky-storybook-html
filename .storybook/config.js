import { configure, addDecorator} from '@storybook/html';

import { configureViewport } from '@storybook/addon-viewport';

import { checkA11y } from '@storybook/addon-a11y';

configureViewport();

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);

addDecorator(checkA11y);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
