import { defaultTheme, RaThemeOptions } from 'react-admin';

export const SECONDARY_COLOR = '#263039';

export const theme: RaThemeOptions = {
  ...defaultTheme,
  palette: {
    secondary: {
      main: SECONDARY_COLOR,
    },
  },
};
