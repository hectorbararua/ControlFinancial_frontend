import { StyledButton } from "./Button.style"
import { Link } from 'react-router-dom'


export default function Button(props) {




  return (
  <>
     <StyledButton 
     backgroundColor={props.bgColor}
     hoverColor={props.hoverColor}
     >
      <Link to={props.url} onClick={props.token}>
        {props.text}
      </Link> 
     </StyledButton>
  </>
  )

}