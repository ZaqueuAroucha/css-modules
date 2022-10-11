import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <h1>Bem-vindo</h1>
      <button class={style.btn}>Botão Teste</button>
    </header>    
  )
}

export default Header
