import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StyledForm } from './FormLogin.style'
import { UserLogin } from '../../sevices/MainApi/User'


function FormLogin() {

  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  
  const navigate = useNavigate()
  
  async function HandleSubmit(event) {

    event.preventDefault()
    
    
    const user = {
      email,
      password
    }
    
    const response = await UserLogin(user)
    
    localStorage.setItem('token', response.token)
    alert(response.message)
    navigate('/account')
  }
  

  return (
    <>
      <div className='FormLogin'>
       {/* HEADER componente */}
          <StyledForm onSubmit={HandleSubmit} >  
            <h2>Login</h2>
              <label htmlFor="email">Email:</label>
                <input type="text" name='email' value={email} onChange={(e) => SetEmail(e.target.value)} required /><br />

              <label htmlFor="password">Senha:</label>
                <input type="password" name='password' value={password} onChange={(e) => SetPassword(e.target.value)} required/><br />

                  <input className='inputSubmit' type="submit" value="Entrar" />
                    <p>Não tem conta ? <Link to="/register">Cadastre-se aqui</Link></p>
            </StyledForm>
      </div>
    </>
  )
}

export default FormLogin