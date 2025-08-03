import { useForm } from "react-hook-form";
import '../css/Modal.css'
export default function ModalCadastroFiado({closeCadastroFiado}){
    
    return(
        <div className="modal">
            <h1>Cadastro de Fiado</h1>
            
            <label>Nome</label>
            <input 
            type="text" 
            placeholder="Nome..."/>
            
            <label>Telefone</label>
            <input 
            type="text"
            placeholder="Telefone..." />

            <label>Observação</label>
            <textarea id="obs"></textarea>
            <div className="align">
            <button onClick={() => closeCadastroFiado("exit")}>Cancelar</button>
            <button>Cadastrar</button>
            </div>
            
        </div>
    )
}   