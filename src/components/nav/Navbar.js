import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa'
import { GoThreeBars } from 'react-icons/go'
import { RiCloseLine } from 'react-icons/ri'

const Navbar = ({toggleSidebar, isOpen}) => {
  return (
    <Nav>
      <NavLogo>DASHBOARD</NavLogo>
      <Icon>
        <UserIcon>
          <FaUserCircle/>
        </UserIcon>
        
        <NavToggle onClick={toggleSidebar}>
          {isOpen ? <RiCloseLine/> : <GoThreeBars/> }
          </NavToggle>
        </Icon>
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
const Icon = styled.div`
  display: flex;
  align-items: center;
`
const UserIcon = styled.i`
  font-size: 20px;
  margin-bottom: 5px;
  @media screen and (max-width: 990px){
    display: none;
  }
`
const NavToggle = styled.i`
  margin-bottom: 5px;
  font-size: 20px;
  display: none;

  @media screen and (max-width: 990px){
    display: inline;
  }
`