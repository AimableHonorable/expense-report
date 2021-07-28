import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  return (
    <Nav>
      <NavLogo>DASHBOARD</NavLogo>
      <UserIcon><FaUserCircle/></UserIcon>
    </Nav>
  )
}

export default Navbar


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: var(--fourth-color);
  color: var(--second-color);
  padding: 0 2rem;

`
const NavLogo = styled.div`
  display: flex;
  align-items: center;

`
const UserIcon = styled.div`
  display: flex;
  align-items: center;
`