import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: var(--deep-blue);
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const LogoLink = styled.a`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
`;

const LogoText = styled.h2`
    font-family: "Axiforma-Light", sans-serif;

    span {
        font-family: "Axiforma-Bold", sans-serif;
    }
`;

export const Header = () => {
    return (
        <HeaderContainer className="bg-gray-800 text-white py-4 w-full">
            <LogoLink href="/">
                <p>MEEOWs</p>
                <em>vies</em>
            </LogoLink>
            <LogoText className="text-xs xs:text-base mt-1">
                movies app from <span className="font-bold">themoviedb API</span>
            </LogoText>
        </HeaderContainer>
    );
};
