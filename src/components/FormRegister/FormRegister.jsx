import { useState } from 'react'
import { StyledForm } from './FormRegister.style'
import { UserRegister } from '../../sevices/MainApi/User'

function FormRegister() {

  const [name, SetName] = useState('')
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  const [confirmpassword, SetConfirmpassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault()


      const user = {
        name,
        email,
        password,
        confirmpassword
      }

      const response = await UserRegister(user)
      
      alert(response.message)
  }

  return (
    <>
      <div className='FormRegister'>
       {/* HEADER componente */}
          <StyledForm onSubmit={handleSubmit} >  
            <h2>Cadastre-se</h2>
            
              <label htmlFor="name">Nome:</label>
                <input type="text" name='name' value={name} onChange={(e) => SetName(e.target.value)} required />

              <label htmlFor="email">Email:</label>
                <input type="email" name='email' value={email} onChange={(e) => SetEmail(e.target.value)}  required/>

              <label htmlFor="password">Senha:</label>
                <input type="password" name='password' value={password} onChange={(e) => SetPassword(e.target.value)} required/>

              <label htmlFor="confirmPassword">Confirmar Senha:</label>
                <input type="password" name='confirmpassword' value={confirmpassword} onChange={(e) => SetConfirmpassword(e.target.value)} required/>

                  <input className='inputSubmit' type="submit" value="Registrar" />
                   
            </StyledForm>
      </div>
    </>
  )
}

export default FormRegister