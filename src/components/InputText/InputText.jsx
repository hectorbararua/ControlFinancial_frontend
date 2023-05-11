import { StyledInput } from './InputText.style'


export default function Input(props) {

  return (
      <StyledInput>
        <label>{props.text}</label>
          <input type={props.type} name={props.name} value={props.value} onChange={props.SetValue} onClick={props.onClick} checked={props.checked} required/>
      </StyledInput>
     
    
  )

}