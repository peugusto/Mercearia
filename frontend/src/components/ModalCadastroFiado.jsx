export default function ModalCadastroFiado({isOpen}){
    const MODAL_STYLE = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        padding: '150px',
        borderRadius: '4px',
        color: 'black',
        backgroundColor: '#fff'
    }
    
    return(
        <div style={MODAL_STYLE}>
            <h1>Cadastro de Fiado</h1>
        </div>
    )
}   