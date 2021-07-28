import Navbar from "../components/nav/Navbar"
// import { Router, Switch } from "express"
import styled from "styled-components"
import Sidebar from "../components/sidebar/Sidebar"
const Dashboard = () => {
  return (
    <DashboardContainer>
      <Navbar/>
      <MainSection >
        <SideWrapper>
        <Sidebar/>
        </SideWrapper>
        <ContentWrapper>
          Content
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
`

const SideWrapper = styled.div`
  width: 20%;
  position: sticky;
  top: 0;
`
const ContentWrapper = styled.div`
  width: 80%;
`