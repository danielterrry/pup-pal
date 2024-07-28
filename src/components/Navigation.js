import { styled } from 'styled-components';
import Colors from '../Colors';
import MediaQuery from '../MediaQuery';
import Burger from './Burger';
import { ReactComponent as Logo } from '../assets/logo.svg'

const Nav = styled.nav`
  display: block;
  height: 80px;
  align-items: center;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
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

const NavLink = styled.a`
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
        <div style={{ width: '105px', height: '50px' }}>
          <Logo />
        </div>
        <NavItems className="nav-items" role="menu">
          <NavItem>
            <NavLink href="#">Link 1</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link 2</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link 3</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link 4</NavLink>
          </NavItem>
        </NavItems>
        <Burger />
      </NavWrapper>
    </Nav>
  );
};

export default Navigation;
