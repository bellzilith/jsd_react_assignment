import styled from "styled-components";
import {Links as SidebarLink} from 'react-router-dom'
import { FaTimes } from "react-icons";

export const DropdownContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2 rem;
  right: 1.5 rem;
  background: transparent;
  font-size: 2 rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarLink = styled(Links)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5 rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

