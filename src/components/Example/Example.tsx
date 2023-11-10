import type { FC } from 'react';

import { StyledExample, ExampleChild } from './Example.style';

export const Example: FC = () => {
    return (
        <StyledExample>
            Example <ExampleChild>child</ExampleChild>
        </StyledExample>
    );
};
