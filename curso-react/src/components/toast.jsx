import { useState } from "react";

export function useToast(){
    const [msg, setMsg] = useState('');

    return{
        msg,
        setMsg
    };
}
export function ToastSucess({msg, setMsg}){
    useState(() =>{
        if (msg == '') return;
        setTimeout(()=>{
            setMsg('')
        }, 5000);
    return () =>{
        clearTimeout(timer);
    };
},[msg,setMsg]);

if (msg='') return;

return(
    <div> className= "fixed top-5 left-5 w-sm bg-green-500"
       {msg}
    </div>
    )
}

export function ToastDanger({msg}){
}
export function ToastWarning({msg}){

}