import { StyledHeader } from './Header.style'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

export default function Header() {

  async function handleRemoveToken() {
    localStorage.removeItem('token')
  }

  return (
    <StyledHeader>
      <Link to="/account">
        <h1>Controle Financeiro</h1>
      </Link>

        <div className="links">
          <Button 
          text="Atualizar conta"
          bgColor="green"
          hoverColor="#90ee90"
          url="/update"
          />

          <Button 
          text="Sair"
          bgColor="red"
          hoverColor="#ff6951"
          url="/"
          token={handleRemoveToken}
          />
        </div>
    </StyledHeader>
  )

}