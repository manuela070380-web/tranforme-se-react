import {Link} from 'react-router'
import { useState } from 'react'
function Auth(){
const [batatinha, setBatatinha] = useState(0);

function sub(){
    setBatatinha(batatinha - 1)
}


return(

<>
    <div class="h-full flex items-center">
        <div class="max-w-sm mx-auto my-auto p-5 bg-secondary text-primary rounded-lg shadow-md flex flex-col">
            <Link to="/" class="mb-5 text-primary">Voltar</Link>
             {batatinha}

            <div className="bg-red-100 rounded-full p-2" onClick={sub}>-</div>
            {batatinha}
            <div className="bg-green-100 rounded-full p-2" onClick={() => setBatatinha(batatinha + 1)}>+</div>

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