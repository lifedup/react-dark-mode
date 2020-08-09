import React from 'react';
import useBroadcast from 'lib/use-broadcast';

const DarkModeSwitch = (): JSX.Element => {
    const [isDark, setDark] = useBroadcast('dark-mode', '0');

    React.useEffect(() => {
        const lsDark = window.localStorage.getItem('dark-mode');
        const browserIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialState = (browserIsDark && lsDark === null) || lsDark === '1';
        setDark(initialState);
    }, []);

    const toggle = () => {
        setDark(!isDark);
        window.localStorage.setItem('dark-mode', !isDark ? '1' : '0');
    };

    return <button type="button" onClick={toggle}>
        {isDark ? "🌞 Switch to Light Mode" : "🌙 Switch to Dark Mode"}
    </button>
};

export default React.memo(DarkModeSwitch);
