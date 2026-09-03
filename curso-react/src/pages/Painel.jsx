import { useState } from "react";
import { Link } from "react-router";
function Painel(){
    const [ modal, setModal ] = useState(false);

return(
    <>
     <h3></h3>

       
        <div className="fixed flex top-0 right-0 bottom-0
             left-0 items-center justify-center bg-black/50 z-50">

            <div className="relative max-w-md w-full p-5 bg-about rounded-lg
            shadow-md flex flex-col bg-white column">

                <a className="bg-prices absolute top-0 right-0 px-2
                    rounded-full cursor-pointer">
                    x
                </a>

                <h2 className="py-2 ">Bem vindo</h2>
                <p>Preenche as informações abaixo</p>
                <form className="flex flex-col">
                    Nome:
                    <input  type="text" placeholder="Digite seu nome completo" />
                    Email: <input type="email" placeholder="Digite seu melhor email" />
                    Senha: <input type="password" placeholder="Letra maiúscula e números" />
                    Data de nascimento: <input type="date" />
                     <a className="mt-5 bg-primary text-white text-center rounded-md py-2">Salvar</a>
            </form>
        </div>
    </div>

    <table>
        <thead>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
        </thead>
        <tbody className="font-secundary">
           
        </tbody>
    </table>
    

        <a className="bg-primary text-white px-4 py-3 fixed bottom-0 right-0 rounded-full"> + </a>
        </>
)
}

export default Painel;