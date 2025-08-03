import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ModalCadastroFiado from './components/ModalCadastroFiado';

function App() {
  const [currentDash, openDash ] = useState("");
  
  const sections = {
    cadastroFiado: <ModalCadastroFiado closeCadastroFiado={openDash}/> ,
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
