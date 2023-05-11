import { StyledSection } from './SectionUpdate.style'
import FormBox from '../FormBox/FormBox'
import FormUpdate from '../FormUpdate/FormUpdate'
import Title from '../Title/Title'

function Section() {
 
  return (
    <>
      <Title/>
        <StyledSection> 
          <FormBox>
            <FormUpdate/>
          </FormBox>
        </StyledSection>
    </>
  )
}

export default Section