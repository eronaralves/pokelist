import { dark } from './dark';
import { light } from './light';

export const defaultTheme = {
  font_family: {
    regular: 'Roboto_400Regular',
    medium: 'Roboto_500Medium',
    bold: 'Roboto_700Bold'
  },

  font_size: {
    ssm: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    '2xl': 26,
    '3xl': 32
  },
  ...light
};

export const darkTheme = {
  ...defaultTheme,
  ...dark
};