


import { points } from "../utils/mediaQuery";


export const useBreakpoints = () => {

    const width = window.screen.availWidth;

    

    return {
        desktop: width > points.tablet,
        tablet: width > points.mobile && width <  points.desktop,
        mobile: width < points.tablet
    }
}