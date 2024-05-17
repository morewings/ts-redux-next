import 'styled-components';
import type {theme} from '@/src/style';

declare module '*.module.css';

type CustomTheme = typeof theme;

declare module 'styled-components' {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-definitions */
    export interface DefaultTheme extends CustomTheme {}
}
