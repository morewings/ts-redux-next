import {styled} from 'styled-components';

export const Header = styled.header`
    align-items: center;
    background: ${props => props.theme.colors.brand};
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 12px 24px;
    position: sticky;
`;

export const Name = styled.h1`
    color: white;
    cursor: default;
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    text-shadow: 1px 1px 1px rgb(0 0 0 / 66%);
    user-select: none;
`;

export const Navigation = styled.div`
    display: flex;
    gap: 18px;
    margin-left: auto;
`;
