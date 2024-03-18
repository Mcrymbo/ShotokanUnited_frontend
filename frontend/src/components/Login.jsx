import { useState } from 'react';
import { loginFields } from './template/formFields'
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./template/Input";
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../hooks/useAuth";

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    const { login } = useAuth();

    const navigate = useNavigate();

    //Handle Login API Integration here
    const authenticateUser = async () =>{
        try { const response=await fetch('https://shotokanunited-backend-4.onrender.com/api/users/login/',{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({...loginState}),
          }
          );
          const data=await response.json()
          if (response.ok){
        
            await login(data)
        
            const intendedDestination = sessionStorage.getItem('intendedDestination') || '/';
            navigate(intendedDestination);
        
            sessionStorage.removeItem('intendedDestination');

          }
          else{
            console.error(data.error)
          }  
            } catch (error) {
            }

    }

    return(
        <form className="mt-2 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px w-[400px]">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>

      </form>
    )
}