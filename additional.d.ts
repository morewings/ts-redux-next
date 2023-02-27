import { ThemeBaseType } from "@olxui/core/dist/theme";

declare module "@emotion/react" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface Theme extends ThemeBaseType {}
}
