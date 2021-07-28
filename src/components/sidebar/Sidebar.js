import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">Dashboard</SidebarLink>
          <SidebarLink to="/">Income</SidebarLink>
          <SidebarLink to="/">Expenses</SidebarLink>
          <SidebarLink to="/">Reports</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    
  )
}

export default Sidebar

const SidebarWrapper = styled.div`
  background-color: var(--third-color);
  height: 100vh;
`

const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 50px);
`

const SidebarLink = styled(Link)`
  border-bottom: 1px solid var(--second-color);
  text-decoration: none;
  color: var(--second-color);
  align-items: center;
  display: flex;
  padding: 0 2rem;
  transition: all 0.3s ease-in-out;

  &:hover{
    background-color: var(--second-color);
    color: var(--third-color);
    font-weight: bold;
  }
`