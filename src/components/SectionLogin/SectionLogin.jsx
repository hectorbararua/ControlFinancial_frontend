import { StyledSection } from './SectionLogin.style'
import FormLogin from '../FormLogin/FormLogin'
import FormBox from '../FormBox/FormBox'
import Title from '../Title/Title'


function Section() {
 
  return (
    <>
    <Title/>
      <StyledSection> 
        <FormBox>
        <FormLogin/>
        </FormBox>

      </StyledSection>
    </>
  )
}

export default Section