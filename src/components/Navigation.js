import { styled } from 'styled-components';
import Colors from '../Colors';
import MediaQuery from '../MediaQuery';
import Burger from './Burger';
import { ReactComponent as Logo } from '../assets/logo.svg'
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  display: block;
  height: 80px;
  align-items: center;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1.5rem;
  justify-content: space-between;

  ${MediaQuery.md} {
    justify-content: flex-start;
  }
`;

const NavItems = styled.ul`
  display: none;
  align-items: center;
  gap: 1rem;
  list-style: none;

  ${MediaQuery.md} {
    display: flex;
  }
`;

const NavItem = styled.li`
  display: block;
`;

const StyledNavLink = styled(NavLink)`
  color: #000000;
  text-overflow: ellipsis;
  text-decoration: none;
  white-space: nowrap;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    color: ${Colors.primary};
    background: ${Colors.darkPurple};
  }
`;

const Navigation = () => {
  return (
    <Nav className='container'>
      <NavWrapper>
        <a href="/" style={{ width: '105px', height: '50px' }}>
          <Logo />
        </a>
        <NavItems className="nav-items" role="menu">
          <NavItem>
            <StyledNavLink to="/link1">Link 1</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/link2">Link 2</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/link3">Link 3</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/link4">Link 4</StyledNavLink>
          </NavItem>
        </NavItems>
        <Burger />
      </NavWrapper>
    </Nav>
  );
};

export default Navigation;
