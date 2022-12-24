
import { createStitches } from '@stitches/react'

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            gray900: '#121214',
            gray800: '#202024',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',

            green500: '#00875f',
            green300: '#00b37e',

            white: '#fff'
        },

        fontSizes: {
            md: '1.8rem',
            lg: '2.0rem',
            xl: '2.4rem',
            '2xl': '3.2rem',
        }
    }
})