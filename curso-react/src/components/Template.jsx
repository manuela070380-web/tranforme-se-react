import { Link } from "react-router";
export function Template({children}){
    return(
    <>
        <nav className="py-2 flex items-center px-4 fixed  top-0 w-full shadow bg-secondary text-white">
            <a className="p-2 mr-2 hover:bg-primary" href="#about">Sobre</a>
            <a className="p-2 mr-2 hover:bg-primary" href="#prices">Preços</a>
            <a className="p-2 mr-2 hover:bg-primary" href="#features">Benefícios</a>
            <Link className="p-2 mr-5 px-4 bg-primary hover:shadow-inner text-white rounded  ml-auto shadow" to="/auth">
            Acessar
            </Link>
        </nav>
        {children}
        <footer>

        </footer>
    </>
    );        
}