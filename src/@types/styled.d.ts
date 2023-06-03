import 'styled-components/native'

import { defaultTheme } from '../theme/defaultTheme'

type ThemeType = typeof defaultTheme

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}