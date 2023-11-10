import { useSelector } from 'react-redux';

import type { State, Themes } from './ThemeReducer';

export const useActiveTheme = () => useSelector<{ themes: State }, keyof typeof Themes>(state => state.themes.active);
