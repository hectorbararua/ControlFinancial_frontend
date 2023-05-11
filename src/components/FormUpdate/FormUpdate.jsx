import { useState } from 'react'
import { StyledForm } from './FormUpdate.style'
import { UserUpdate } from '../../sevices/MainApi/User'

function FormUpdate() {

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
      
      const response = await UserUpdate(user)
      
      alert(response.message)

  }

  return (
    <>
      <div className='FormUpdate'>
       {/* HEADER componente */}
          <StyledForm onSubmit={handleSubmit} >  
            <h2>Atualizar Conta</h2>
            

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

export default FormUpdate