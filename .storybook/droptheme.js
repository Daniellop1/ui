import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#00FFA2',
  colorSecondary: '#004466',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Dglobal UI',
  brandImage: 'http://cdn.daniellop.me/ui.png',
  
});