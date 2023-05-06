import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #0D6EFD;
  height: 65px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1500px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavBrandLink = styled(Link)`
  color: #fff;
  display: flex;
  font-weight: bold;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
  
export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  font-weight: bold;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const NavLink2 = styled(Link)`
  color: #000;
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  padding: 5px 10px;
  height: 100%;
  cursor: pointer;
  &.active {
    background-color: #E9ECEF;
    color: #000;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavBrand = styled.div`
  display: flex;
  align-items: center;
  margin-right: -15px;
  color: #fff;
  .brand-name{
    font-size: 25px;
  }
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: -24px; */
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #000;
  padding: 10px 22px;
  color: #000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
  }
`;