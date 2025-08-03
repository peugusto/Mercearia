import navBarContent from "../javascript/NavBarContent"

export default function NavBar({handleMain}){
    console.log('NavBar render') 
    // navbar continua tendo renderização a mais que o necessario.
    return(
        <>
        <header className="navBar">
        <ul className="list">    
        {navBarContent.map((content) => {
            return <li key={content.keyName} onClick={() => handleMain(content.keyName)} style={{cursor:"pointer"}}>
                <img src = {content.img} alt={content.title}/> {content.title}
            </li>
        })}
        </ul>
        </header>
        </>
    )
}