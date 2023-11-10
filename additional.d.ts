import 'styled-components';
import type { theme } from '@/styling';

type Theme = typeof theme;

declare module 'styled-components' {
    export type DefaultTheme = Theme;
}
