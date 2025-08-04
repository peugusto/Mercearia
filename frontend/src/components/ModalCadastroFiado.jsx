import { useForm } from "react-hook-form";
import '../css/Modal.css'
export default function ModalCadastroFiado({closeCadastroFiado}){
    const {register, handleSubmit} = useForm();

    function onSubmit(data){
        console.table(data);
        alert('consulte o console');
        closeCadastroFiado("exit");
    }
    return(
        <div className="modal">
            <h1>Cadastro de Fiado</h1>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome</label>
            <input 
            type="text" 
            placeholder="Nome..." 
            {...register("name")}/>
            
            <label>Telefone</label>
            <input 
            type="text"
            placeholder="Telefone..." 
            {...register("phone")}/>

            <label>Observação</label>
            <textarea id="obs" {...register("phone")}></textarea>

            <div className="align">
            <button type="button" onClick={() => closeCadastroFiado("exit")}>Cancelar</button>
            <button type="submit">Cadastrar</button>
            </div>
            </form>
        </div>
    )
}   