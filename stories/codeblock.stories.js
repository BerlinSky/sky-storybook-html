
import { storiesOf } from '@storybook/html';
import copyCodeBlock from '@pickra/copy-code-block';
import codeBlockHtml from './codeblock.html'

copyCodeBlock(codeBlockHtml);

storiesOf('HTML', module)
  .add('Code File', () => `
    <h1>Code File</h1>
    <h2>Example Code</h2>
    ${copyCodeBlock(codeBlockHtml)};
    <h2>Usage</h2>
  `)


