import { useState, useEffect } from 'react';

const breakpoints = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
};

function useScreenSize() {
    const getScreenSize = (width: number) => {
        if (width < breakpoints.sm) return 'xs';
        if (width < breakpoints.md) return 'sm';
        if (width < breakpoints.lg) return 'md';
        if (width < breakpoints.xl) return 'lg';
        if (width < breakpoints['2xl']) return 'xl';
        return '2xl';
    };

    const [screenSize, setScreenSize] = useState(() => getScreenSize(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(getScreenSize(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screenSize;
}

export default useScreenSize;