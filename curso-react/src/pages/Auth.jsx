import {Link} from 'react-router'

function Auth(){
return(

<>
    <div class="h-full flex items-center">
        <div class="max-w-sm mx-auto my-auto p-5 bg-secondary text-white rounded-lg shadow-md flex flex-col">
            <Link to="/" class="mb-5 shadow-inner">Voltar</Link>

            <form class="flex flex-col">
                Email: <input id="iEmailLogin" type="email" placeholder="Digite o seu email cadastro" />

                Senha: <input id="iPassLogin" type="password" placeholder="Digite sua senha cadastrada" />

                <a id="btLogin" class="mt-5 bg-primary text-white text-center rounded-md py-2">Entrar</a>
            </form>
        </div>
    </div>
    <script src="user.js"></script>
</>

  
)
}
export default Auth;