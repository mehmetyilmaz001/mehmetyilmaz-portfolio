import lightTheme from "./Light";
import darkTheme from "./Dark";

export interface Theme {
    body: string;
    text: string;
    toggleBorder: string;
}

const theme = {
    lightTheme,
    darkTheme,
    fonts: {
        adventPro: 'font-family: \'Advent Pro\', sans-serif;'
    },
    breakpoints: {
        mobile: '600px',
    }
}

export default theme;