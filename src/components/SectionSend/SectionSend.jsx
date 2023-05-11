import { StyledSection } from './SectionSend.style'
import { useState } from 'react'
import Input from '../InputText/InputText'
import ButtonAdd from '../ButtonAdd/ButtonAdd'
import { Transaction } from '../../sevices/MainApi/Account'



export default function Section() {

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [operationType, setOperationType] = useState('deposit')


  async function handleSubmit(event) {
    event.preventDefault()

    const account = {
      description,
      amount: +amount,
      operationType
    }

    const response = await Transaction(account)
 
    window.location.reload()

    alert(response.message)
  }


  return (
    <StyledSection>  

      <form onSubmit={handleSubmit}>
        <div className='send'>
          <Input 
            text="Descriação" 
            type="text" 
            name="description" 
            value={ description } 
            SetValue={(e) => setDescription(e.target.value)}
            />
            <Input 
            text="Valor" 
            type="text" 
            name="amount"
            value={amount} 
            SetValue={(e) => setAmount(e.target.value)}
            />
        </div>

        <div className='brand'>

          <Input 
            text="Entrada" 
            type="radio" 
            onClick={()=> {setOperationType('deposit')}}
            checked={operationType === 'deposit'}
            name="controlType"
          />

          <Input 
            text="Saída" 
            type="radio" 
            onClick={()=> {setOperationType('withdrawal')}}
            checked={operationType === 'withdrawal'}
            name="controlType"
          />
        </div>

          <div>
            <ButtonAdd text="Adicionar"  />
          </div>
      </form>
    </StyledSection>
  )

}