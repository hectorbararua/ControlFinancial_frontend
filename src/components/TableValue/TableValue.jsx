import {StyledTableValue} from './TableValue.style'


export default function TableValue(props) {

  return (
    
  
    <StyledTableValue key={props.index}>
      <td>{props.description}</td>
      <td>{props.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
      <td>{props.type}</td>
      <td>{props.icon}</td>
    </StyledTableValue>
  
 
  )

}




