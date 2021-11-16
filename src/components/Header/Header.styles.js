import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";

export const Header = styled.div`
  border-bottom: 3px solid #222;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 calc((100vw - 1800px) / 2);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 1.5px;
  padding: 0 3%;
`;

export const LogoContainer = styled(Link)`
  flex: 0 0 10%;
  padding: 1.5rem 0;
`;

// export const Logo = styled.img`
//   width: 100%;
// `;

export const Tabs = styled.ul`
  display: none;
  align-items: center;
  height: 100%;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const Tab = styled(NavLink)`
  color: white;
  cursor: pointer;
  margin-left: 2.5rem;
  padding: 1rem 3.5rem;
  text-decoration: none;

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const UserOptions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 3rem;
`;

export const HamburgerMenu = styled(MenuIcon)`
  fill: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 1.8rem;
  margin-left: 1.5rem;
  margin-top: 0.8rem;
  /* margin-left: auto; */

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
