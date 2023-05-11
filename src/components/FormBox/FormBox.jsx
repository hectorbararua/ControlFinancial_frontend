import { StyledFormBox } from './FormBox.style'


function FormBox(props) {
 
  return (
    
            <StyledFormBox >
              {props.children}
            </StyledFormBox>

  )
}

export default FormBox