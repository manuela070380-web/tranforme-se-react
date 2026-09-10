import {Link, useNavigate} from 'react-router'
import { useState } from 'react'

function Auth(){

    /* const [variavel, funcaoAlteraVariavel] = useState('valor inicial'); */

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [msg, setMsg] = useState("");

    const nav = useNavigate();

    function handleLogin(){
        const users =
            JSON.parse(localStorage.getItem('users')) || [];

        let user = users.find(u => {
            return u.email == email;
        });

        if(!user){
            setMsg("Usuário não encontrado.");
            return;
        }


        if(user.senha == pass){
            setMsg("Login realizado com sucesso.");
            localStorage.setItem(
                'logado',
                JSON.stringify(user)
            );

            nav('/painel');
        }else{

            setMsg("Senha incorreta.");

        }
    }


return(

<>
    <div className="h-full flex items-center">
        {msg}
        <div className="max-w-sm mx-auto my-auto p-5 bg-secondary text-primary rounded-lg shadow-md flex flex-col">
            <Link to="/" className="mb-5 text-primary">Voltar</Link>
             

            
            <form className="flex flex-col">
                <span className="text-left">Email:</span>
                <input id="iEmailLogin" type="email" placeholder="Digite o seu email cadastro" onChange={(e) => setEmail(e.target.value)} />

                Senha: <input id="iPassLogin" type="password" placeholder="Digite sua senha cadastrada"  onChange={(e) => setPass(e.target.value)} />

                <a onClick={handleLogin } className="mt-5 bg-primary text-white text-center rounded-md py-2">Entrar</a>
            </form> 
        </div>
    </div>

</>

  
)
}
export default Auth;