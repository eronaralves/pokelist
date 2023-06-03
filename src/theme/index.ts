import { dark } from './dark';
import { light } from './light';

export const defaultTheme = {
  font_family: {
    regular: 'Roboto_400Regular',
    bold: 'Roboto_700Bold'
  },

  font_size: {
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    '2xl': 32
  },
  ...light
};

export const darkTheme = {
  ...defaultTheme,
  ...dark
};