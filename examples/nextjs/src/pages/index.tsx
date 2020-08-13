import React from 'react';
import DarkModeToggle from 'components/dark-mode-toggle';
import StyledComponent from 'components/styled-component';
import CSSModuleComponent from 'components/css-module-component';

const Index = (): JSX.Element => (
  <>
    <header>
      <DarkModeToggle />
    </header>
    <main>
      <div className="div">
        <h1 className="title">This is styled using vanilla css</h1>
      </div>
      <StyledComponent />
      <CSSModuleComponent />
      <div className="div">
        <h1 className="title">
          Nothing re-renders when changing themes
          {' '}
          <span role="img" aria-label="mind blown">🤯</span>
        </h1>
      </div>
      <div className="div">
        <h1 className="title">Open new tabs and windows to see everything sync on state change*. Event with cookies disabled.</h1>
      </div>
      <div className="div">
        <h1 className="title">* need to use local storage listener for safari.</h1>
      </div>
    </main>
  </>
);

export default Index;
