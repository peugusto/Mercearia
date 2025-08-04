import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ModalCadastroFiado from './components/ModalCadastroFiado';
import ModalCadastroProduto from './components/ModalCadastroProduto';

function App() {
  const [currentDash, openDash ] = useState("");
  
  const sections = {
    cadastroFiado: <ModalCadastroFiado closeModal={openDash}/> ,
    produtos: <ModalCadastroProduto closeModal={openDash}/>,
    exit : null,
  }
  
  return (
    <>
    <NavBar handleMain={openDash}/>
    <main>
    {sections[currentDash] || null}
    
    </main>
    </>
  )
}

export default App
