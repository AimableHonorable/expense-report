import styled from 'styled-components';

const MainDashboard = () => {
  return (
    <MainDashboardWraper>
      <Header className="col-md-8">
        <Heading>DASHBOARD</Heading>
        <HeaderConent className="row row-cols-1 row-cols-lg-2">
          <Col className="col">
          <Card className="card">
            <CardBody>
              <CardTitle>Income</CardTitle>
              <Text>75,000 RWF</Text>
            </CardBody>
          </Card>
          </Col>

          <Col className="col">
          <Card className="card">
            <CardBody>
              <CardTitle>Income</CardTitle>
              <Text>75,000 RWF</Text>
            </CardBody>
          </Card>
          </Col>
          
        </HeaderConent>
      </Header>
    </MainDashboardWraper>
  )
}

export default MainDashboard

const MainDashboardWraper = styled.div`
  padding: 2rem;
`

const Header = styled.div`
  
`
const HeaderConent = styled.div``

const Heading = styled.h1`
  color: var(--third-color);
`

const Col = styled.div``
const Card = styled.div``

const CardBody = styled.div``

const CardTitle = styled.h5``
const Text = styled.p``