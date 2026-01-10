import {useMediaQuery} from 'react-responsive';

type DeviceType = 'isDesktop' | 'isTablet' | 'isMobile';

/**
 * Check if the device is Mobile, Tablet or Desktop.
 * If the width is less than the minimum width for tablet, the device is considered to be a mobile.
 * @param [minTabletWidth] Minimum width of the tablet size (default = 768)
 * @param  [minDesktopWidth] Minimum width of the desktop size (default = 1440)
 * @returns 'isDesktop' | 'isTablet' | 'isMobile'
 * */
export default function DeviceTypes(minTabletWidth = 768, minDesktopWidth = 1440): DeviceType {
    const isTablet = useMediaQuery({query: `(min-width: ${minTabletWidth}px)`});
    const isDesktop = useMediaQuery({query: `(min-width: ${minDesktopWidth}px)`});

    return isDesktop ? "isDesktop" : isTablet ? "isTablet" : "isMobile";
}

