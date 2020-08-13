import React from 'react';
import useDarkMode from 'lib/use-dark-mode';

const Dark = (): JSX.Element => (
  <>
    <span role="img" aria-label="crescent moon">🌙</span>
    {' '}
    Switch to Light Mode
  </>
);

const Light = (): JSX.Element => (
  <>
    <span role="img" aria-label="smiling sun">🌞</span>
    {' '}
    Switch to Dark Mode
  </>
);

const DarkModeSwitch = (): JSX.Element => {
  const [isDark, toggle] = useDarkMode();

  return (
    <button type="button" onClick={toggle}>
      {isDark ? <Dark /> : <Light />}
    </button>
  );
};

export default React.memo(DarkModeSwitch);
