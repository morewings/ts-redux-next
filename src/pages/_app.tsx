import type { AppProps } from "next/app";
import { Provider } from "@olxui/core/dist/core/Provider";
import { theme as themeOtodom } from "@olxui/core/dist/theme/OtodomTheme";
import { theme as themeImovirtual } from "@olxui/core/dist/theme/ImovirtualTheme";
import { theme as themeStoria } from "@olxui/core/dist/theme/StoriaTheme";

/* Build time theme injection example */
const selectedTheme =
    {
        IMOVIRTUAL: themeImovirtual,
        OTODOM: themeOtodom,
        STORIA: themeStoria,
    }[process.env.THEME as "IMOVIRTUAL" | "OTODOM" | "STORIA"] || themeOtodom;

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider theme={selectedTheme}>
            <Component {...pageProps} />
        </Provider>
    );
}
