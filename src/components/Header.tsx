import React from "react";
import ifprLogo from '@/assets/ifpr-logo.png';
import styled from "styled-components";

const HeaderContainer = styled.header`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 50rem
`;

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={ifprLogo} alt="IFPR" />
    </HeaderContainer>
  )
}
