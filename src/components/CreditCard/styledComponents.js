// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: linear-gradient(#3b4b69, #344e7a);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`

export const LeftPortion = styled.div`
  min-height: 100vh;
  width: 50%;
  background-color: #344e7a;
  background-size: cover;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 300px;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
`

export const CardHolderName = styled.h5`
  color: white;
  text-transform: capitalize;
  font-weight: lighter;
`

export const FormContainer = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`
export const CardNumberInput = styled.input`
  width: 300px;
  height: 38px;
  margin-bottom: 20px;
`
export const CardHolderInput = styled.input`
  width: 300px;
  height: 38px;
`
export const PaymentHeading = styled.h1`
  color: black;
`
