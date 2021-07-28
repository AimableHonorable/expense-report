import styled from 'styled-components';
import DataChart from '../components/dashboard/DataChart';
import { FcMoneyTransfer } from 'react-icons/fc'


const MainDashboard = () => {
  
  return (
    <MainDashboardWraper>
      <Header className="col-md-8">
        <Heading>DASHBOARD</Heading>
        <HeaderConent className="row row-cols-1 row-cols-lg-2">
          <Col className="col">
          <Card className="card">
            <CardBody>
              <CardImage>
                <FcMoneyTransfer/>
              </CardImage>
              <CardMain>
                <CardTitle>Income</CardTitle>
                <Text>75,000 RWF</Text>
              </CardMain>
              
            </CardBody>
          </Card>
          </Col>

          <Col className="col">
          <Card className="card">
          <CardBody>
              <CardImage>
                <FcMoneyTransfer/>
              </CardImage>
              <CardMain>
                <CardTitle>Income</CardTitle>
                <Text>75,000 RWF</Text>
              </CardMain>
              
            </CardBody>
          </Card>
          </Col>
          
        </HeaderConent>

        <Chart>
          <ChartTitle>Income Chart</ChartTitle>
          <DataChart/>
        </Chart>
      </Header>
    </MainDashboardWraper>
  )
}

export default MainDashboard

const MainDashboardWraper = styled.div`
  padding: 2rem;

  @media screen and (max-width: 990px){
    padding: 2rem 10px;
  }
`

const Header = styled.div`
  
`
const HeaderConent = styled.div``

const Heading = styled.h1`
  color: var(--third-color);
`

const Col = styled.div``
const Card = styled.div`
  border-radius: 10px;
  margin-bottom: 1rem;
`

const CardBody = styled.div`
  display: flex;
`

const CardImage = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  svg{
    width: 100%;
    height: 100%;
  }
`

const CardMain = styled.div`
  padding: 1rem;
`

const CardTitle = styled.h5``
const Text = styled.p``

const Chart = styled.div`
  padding: 2rem 0;
  margin-top: 5rem;
  background-color: #fff;
  overflow: hidden;
`
const ChartTitle = styled.h3`
  text-align: center;
`