import styled from "styled-components"
import { Form, FormInput, FormWrapper, Table, TBody, Tdata, TRow, Button, Heading } from "./Income"

const Expense = () => {
  return (
    <ContentWrapper>
      <Heading>Expense tracking</Heading>
      <FormWrapper>
        <Form>
          <Table>
            <TBody>
              <TRow>
                <Tdata>Name</Tdata>
                <Tdata>
                  <FormInput type="text"/>
                </Tdata>
              </TRow>

              <TRow>
                <Tdata>Amount</Tdata>
                <Tdata>
                  <FormInput type="text"/>
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
    </ContentWrapper>
  )
}

export default Expense

const ContentWrapper = styled.div`
  padding: 2rem;

  @media screen and (max-width: 990px){
    padding: 2rem 0;
  }
`