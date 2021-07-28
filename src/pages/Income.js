import styled from 'styled-components';

const Income = () => {
  return (
    <IncomeSection>
      <Heading>Add Your Income</Heading>
      <FormWrapper>
        <Form>
          <Table>
            <TBody>
              <TRow>
                <Tdata>Name</Tdata>
                <Tdata>
                  <FormInput type="text" />
                </Tdata>
              </TRow>
              <TRow>
                <Tdata>Amount</Tdata>
                <Tdata>
                  <FormInput type="text" />
                </Tdata>
              </TRow>
              <TRow>
                <Tdata>Date</Tdata>
                <Tdata>
                  <FormInput type="date"/>
                </Tdata>
              </TRow>
            </TBody>

          </Table>

          <Button>Save</Button>
        </Form>
      </FormWrapper>
    </IncomeSection>
  )
}

export default Income

const IncomeSection = styled.div`
  padding: 2rem;

  @media screen and (max-width: 990px){
    padding: 2rem 0;
  }
`
export const Heading = styled.h1` 
  text-align: center;
`
export const FormWrapper = styled.div`
  padding: 1rem;
  width: 50%;
  margin: 2rem auto;

  @media screen and (max-width: 990px){
    width: 100%;
    margin: 0;
  }
`
export const Form = styled.form`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
`
export const Table = styled.table`
  width: 100%;
`
export const TBody = styled.tbody``
export const TRow = styled.tr`
  
`
export const Tdata = styled.td`
  padding-bottom: 1rem;
  color: var(--fifth-color);
  text-align: left;
`

export const FormInput = styled.input`
  width: 100%;
  height: 3rem;
  border: 1px solid var(--fifth-color);
  border-radius: 5px;
  color: var(--fifth-color);

  &:focus{
    border: 2px solid var(--fifth-color);
    outline: none;
  }
`
export const Button = styled.button`
  background-color: var(--fifth-color);
  color: var(--second-color);
  border: none;
  padding: 10px 3rem;
  border-radius: 5px;

  &:hover{
    color: #fff;
  }
`