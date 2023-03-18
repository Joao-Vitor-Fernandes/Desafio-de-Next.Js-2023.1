import { extendTheme } from "@chakra-ui/theme-utils";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
    sm: '40 em',
    md: '52 em',
    lg: '64 em',
    xl: '80 em',
})

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'FFFFFF',
                color: 'black',
            },
        },
        breakpoints
    },
})
