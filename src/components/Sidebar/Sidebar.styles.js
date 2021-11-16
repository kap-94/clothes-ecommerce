import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete-icon.svg";

export const Sidebar = styled.aside`
  display: grid;
  align-items: center;

  position: fixed;
  left: 0;
  top: 0;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  background: ${({ theme }) => theme.colors.black};
  height: 100%;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  width: 100%;
  z-index: 1000;
  transition: 0.3s ease-in-out;
`;

export const CloseIcon = styled(DeleteIcon)`
  fill: ${({ theme }) => theme.colors.white};
  height: 35px;
  width: 35px;
`;

export const Icon = styled.div`
  background: transparent;
  cursor: pointer;
  outline: none;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

export const SidebarNav = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.5rem;
  list-style: none;
  margin: 1.5rem 0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: blue;
  }
`;
