import { useForm } from "react-hook-form";
import '../css/Modal.css'

export default function ModalCadastroProduto({closeModal}){
    const {register,handleSubmit} = useForm();
        function onSubmit(data){
        console.table(data);
        alert('consulte o console');
        closeModal("exit");
    }
    return(
        <>
        <div className="modal">
            <h1>Cadastro de Produto</h1>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome</label>
            <input 
            type="text" 
            placeholder="Nome..." 
            {...register("name")}/>
            
            <label>Código</label>
            <input 
            type="number"
            placeholder="Código..." 
            {...register("code")}/>

            <label>Valor unitário</label>
            <input 
            type="number"
            placeholder="Valor..." 
            {...register("price")}/>

            <div className="align">
            <button type="button" onClick={() => closeModal("exit")}>Cancelar</button>
            <button type="submit">Cadastrar</button>
            </div>
            </form>
        </div>
        </>
    )
}