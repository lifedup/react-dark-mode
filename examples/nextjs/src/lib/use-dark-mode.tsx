import React from 'react';
import useBroadcast from 'lib/use-broadcast';

type UseDarkMode = (name?: string, className?: string) => [unknown, () => void];

const useDarkMode: UseDarkMode = (name = 'dark-mode', className = '__dark') => {
  const [state, setState] = useBroadcast(name, false);

  React.useEffect(() => {
    setState(document.documentElement.classList.contains(className));
  }, [className, setState]);

  const toggle = () => {
    setState(!state);
    window.localStorage.setItem(name, state ? '1' : '0');
    document.documentElement.classList[state ? 'remove' : 'add'](className);
  };

  return [state, toggle];
};

export default useDarkMode;
