
import {StyledDiv} from './CardBox.style.jsx'

export default function CardBox(props) {

  return (
   
    <StyledDiv>
      <div >
        <h3 >{props.title}</h3>
          <p className='icon'>{props.icon}</p>
      </div>
        <p className='value'>{props.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
    </StyledDiv>
    
  )

}