import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase';

function Painel() {
    const [modal, setModal] = useState(false) //bollean
    const [users, setUsers] = useState([]) //vetor
    const [user, setUser] = useState({}) //objeto
    const [logged, setLogged] = useState({})
    const [isEdit, setIsEdit] = useState(true)
    const [index, setIndex] = useState(-1);

    const [spiner, setRoda] = useState(false);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        const dadosLogado = JSON.parse(localStorage.getItem('logado'))
        if (dadosLogado) setLogged(dadosLogado)
    }, []);

    useEffect(() => {
        console.log("aqui")
        const usersTemp = JSON.parse(localStorage.getItem('users'))
        console.log(usersTemp)
        if (usersTemp) setUsers(usersTemp)
    }, []);
    function loadUser(){
        const {data, error} = supabase.from('profile').select('*')
        if(error){
            setMsg(error.message)
            return;
        }
        setUsers(data)

    }
         async function editUser(){
        setSpiner(true)
        const { data, error } = await supabase
            .from('profiles')
            .update(user)
            .eq('id', index);

        if(error){
            setMsg(error.message)
            setSpiner(false)
            return;
        }

        setMsg("Usuario editado")
        setSpiner(false)
        loadUsers()
    }




    function deleteUser(i){
    }



    function updateUser(indice) {
        setModal(true)
        setUser(users[indice])
        setIndex(indice)
    }

    async function handleRegister(){
        setSpiner(true)
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: user.email,
            password: user.password
        });

        if(authError){
            setMsg(authError.message)
            setSpiner(false)
            return;
        }
        

        if(!authData){
            setMsg("Não foi possível cadastrar, verifique a internet")
            setRoda(false)
            return;
        }
        
        const{
            data: loginData,error:loginError
        } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.senha
        })

        const{error: profileError} = await supabase
        .from('profiles')
        .insert({
            user_id: loginData.user.id,
            name: user.name,
            birth_date: user.nascimento,
            ra: user.ra
        });

        if(profileError){
        
            setMsg(profileError.message)
            setRoda(false)
            return;
        }
        setRoda(false)
        setMsg("Usuário cadastrado com sucesso")
        
    }

    return (
        <div>
            <h3 >Ola, {logged?.name}</h3>

            {modal && (
                <div
                    className="fixed flex top-0 right-0 bottom-0 
            left-0 items-center justify-center bg-black/50 z-50">

                    <div className="relative max-w-md w-full p-5 bg-about rounded-lg 
            shadow-md flex flex-col bg-white">

                        <a onClick={() => {
                            setModal(false)
                            setIsEdit(false)
                            setUser({})
                            setIndex(-1)
                        }}
                            className="bg-prices absolute top-0 right-0 px-2 
                            rounded-full cursor-pointer">
                            X
                  
                        </a>

                        <h2>Cadastre um novo usuário</h2>
                        <p>Preencha as informações abaixo</p>

                        {isEdit ? (
                            <form className="flex flex-col">
                                name:
                                <input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" placeholder="Digite seu name completo" />
                                Email:
                                <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" placeholder="Digite o seu melhor email" />

                                Senha:
                                <input onChange={(e) => setUser({ ...user, senha: e.target.value })} type="password" placeholder="Letra maiúscula e números" />
                                Data de nascimento:
                                <input value={user.nascimento} onChange={(e) => setUser({ ...user, nascimento: e.target.value })} type="date" />

                                Matrícula:
                                <input value={user.ra} onChange={(e) => setUser({ ...user, ra: e.target.value })} type="text" placeholder="Digite seu name RA" />

                                { index!= -1 &&(
                                <a onClick={() => {setIsEdit(false)}} 
                                className="mt-5 bg-primary text-white text-center rounded-md py-2 bg-red-300">Cancelar</a>)}

                                <a onClick={handleRegister} className="mt-5 bg-primary text-white text-center rounded-md py-2">{spiner?"...":"Salvar"}</a>
                                {msg}
                            </form>) :
                            (
                                <>
                                    <p>name: {user.name}</p> 
                                     <p>Email: {user.email}</p> 
                                      <p>  Data de nascimento:: {user.nascimento}</p> 
                                       <a onClick={() => {setIsEdit(true)}} 
                                className="mt-5 bg-primary text-black text-center rounded-md py-2 bg-yellow-300">Editar</a>
                                </>
                            )
                        }

                        
                    </div>
                </div>
            )}

            <a onClick={() => {
                setModal(true)
                setIsEdit(true)
            }}

             className="rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0"> + </a>

            <table>
                <thead>
                    <th>name</th>
                    <th>Email</th>
                    <th>Ações</th>
                </thead>
                <tbody id="listUsers" className="font-secundary">

                    {users.map((u,i) => (
                        <tr>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>
                                <a className='cursor-pointer
                                       px-2
                                       mx-4
                                       hover:shadow
                                       shadow-md
                                       text-white
                                       rounded-full
                                       bg-green-500'
                                    onClick={() => updateUser(u)}
                                >V</a>
                                <a className='cursor-pointer
                                       px-2
                                       mx-4
                                       hover:shadow
                                       shadow-md
                                       text-white
                                       rounded-full
                                       bg-red-500'
                                       onClick={() => deleteUser(u)}
                                >X</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Painel;