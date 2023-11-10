import styled from 'styled-components';

export const ExampleChild = styled.div`
    color: beige;
`;

export const StyledExample = styled.div`
    --test: 0;

    background: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.second};
`;
