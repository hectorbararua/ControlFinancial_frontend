import { StyledSection } from './SectionRegister.style'
import FormBox from '../FormBox/FormBox'
import FormRegister from '../FormRegister/FormRegister'
import Title from '../Title/Title'

function Section() {
 
  return (
    <>
      <Title/>
        <StyledSection> 
          <FormBox>
            <FormRegister/>
          </FormBox>
            
        </StyledSection>
    </>
  )
}

export default Section