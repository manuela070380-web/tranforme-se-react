import {Link} from 'react-router'
import { useState } from 'react'
function Auth(){
const [email, setEmail] = useState("");



return(

<>
    <div class="h-full flex items-center">
        <div class="max-w-sm mx-auto my-auto p-5 bg-secondary text-primary rounded-lg shadow-md flex flex-col">
            <Link to="/" class="mb-5 text-primary">Voltar</Link>
             

            
            <form class="flex flex-col">
                <span className="text-left">Email:</span>
                <input id="iEmailLogin" type="email" placeholder="Digite o seu email cadastro" onChange={(e) => setEmail(e.target.value)} />

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