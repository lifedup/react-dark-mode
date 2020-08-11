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
        </main>
    </>
)

export default Index;