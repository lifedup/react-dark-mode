import React from 'react';
import styled from "styled-components";


const Div = styled.div`
    align-items: center;
    background-color: var(--secondary-bg-color);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: center;
    height: 100px;
`;

const H1 = styled.h1`
    font-size: 1rem;
`;

const StyledComponent = (): JSX.Element => (
    <Div>
        <H1>This is styled using a styled component</H1>
    </Div>
)

export default StyledComponent;