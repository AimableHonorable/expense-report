import Navbar from "../components/nav/Navbar"
import { Switch, Route } from "react-router"
import styled from "styled-components"
import Sidebar from "../components/sidebar/Sidebar"
import { useState } from "react"
import MainDashboard from "./MainDashboard"
import Income from "./Income"
import Expense from "./Expense"
import Report from "./Report"


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <DashboardContainer>
      <Navbar toggleSidebar={toggleSidebar}/>
      <MainSection >
        <SideWrapper isOpen={isOpen}>
        <Sidebar toggleSidebar={toggleSidebar}/>
        </SideWrapper>
        <ContentWrapper>
          <Switch>
            <Route exact path="/">
              <MainDashboard/>
            </Route>
            <Route path="/income">
              <Income/>
            </Route>
            <Route path="/expenses">
              <Expense/>
            </Route>
            <Route path="/reports">
              <Report/>
            </Route>
          </Switch>
          
        </ContentWrapper>
      </MainSection>
      
    </DashboardContainer>
  )
}

export default Dashboard

const DashboardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`

const MainSection = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`

const SideWrapper = styled.div`
  z-index: 999;
  width: 300px;
  @media screen and (max-width: 990px){
    display: ${({ isOpen }) => (isOpen ? 'fixed' : 'none')};;
    /* width: 50%; */
    position: absolute;
    left: 0;
    width: 100vw;
    /* width: 50%; */
  }
`
const ContentWrapper = styled.div`
  width: 80%;

  @media screen and (max-width: 990px){
    width: 100%;
    min-height: 100vh;
  }
`