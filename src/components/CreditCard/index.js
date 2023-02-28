// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CardContainer,
  CardHolderName,
  FormContainer,
  CardNumberInput,
  CardHolderInput,
  LeftPortion,
  PaymentHeading,
} from './styledComponents'
import './index.css'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const onChangeCardNo = event => {
    setCardNumber(event.target.value)
  }

  const onChangeHolderName = event => {
    const holdername = event.target.value

    setCardHolderName(holdername)
  }

  //   const cardHolderNameCapital = cardHolderName.toUppercase()
  return (
    <MainContainer>
      <LeftPortion>
        <h1>Credit card</h1>
        <CardContainer data-testid="creditCard">
          <p className="inputs">{cardNumber}</p>
          <CardHolderName>CARDHOLDER NAME</CardHolderName>
          <p className="inputs">{cardHolderName}</p>
        </CardContainer>
      </LeftPortion>

      <FormContainer>
        <PaymentHeading>Payment Method</PaymentHeading>
        <CardNumberInput
          onChange={onChangeCardNo}
          type="text"
          placeholder="Card Number"
        />
        <CardHolderInput
          onChange={onChangeHolderName}
          type="text"
          placeholder="CardHolder Name"
        />
      </FormContainer>
    </MainContainer>
  )
}
export default CreditCard
