import React from 'react';
import useBroadcast from 'lib/use-broadcast';

const DarkModeSwitch = (): JSX.Element => {
    const initialState = document.documentElement.classList.contains('__dark');
    const [isDark, setDark] = useBroadcast('dark-mode', initialState);

    const toggle = () => {
        setDark(!isDark);
        window.localStorage.setItem('dark-mode', !isDark ? '1' : '0');
    };

    return <button type="button" onClick={toggle}>
        {isDark ? "🌞 Switch to Light Mode" : "🌙 Switch to Dark Mode"}
    </button>
};

export default React.memo(DarkModeSwitch);
