import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    base: '0em', // 0px
    sm: '30em', // ~480px
    md: '48.06em', // ~769px
    lg: '62em', // ~992px
    xl: '90em', // ~1440px
    xxl: '120em', // ~1920px
};

const theme = extendTheme({
    breakpoints,
});

export default theme;
