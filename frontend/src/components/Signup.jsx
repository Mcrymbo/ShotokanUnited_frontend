import { useState } from 'react';
import { signupFields } from "./template/formFields"
import FormAction from "./FormAction";
import Input from "./template/Input";
import { useNavigate } from 'react-router-dom'

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>{
    const { id, value } = e.target;
    setSignupState({ ...signupState, [id]: value });
};

  const handleSubmit=(e)=>{
    e.preventDefault();
    createAccount()
  }

  const navigate = useNavigate()
  const createAccount = async ()=>{
    try { const response=await fetch('https://shotokanunited-backend-4.onrender.com/api/users/register/',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({...signupState}),
      }
      );
      const data=await response.json()
    //   localStorage.setItem('userData', JSON.stringify(data));
      if (response.ok){
        navigate('/')
        console.log(data)
      }
      else{
        setSignupState(fieldsState)
        // setError(data.error)
        // setMessage('')
      }  
        } catch (error) {
          console.log(error)
        }
  }

    return(
        <form className="mt-4 space-y-6 flex justify-center" onSubmit={handleSubmit}>
            <div className="w-[480px] mb-20">
            {
                    fields.map(field=>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={signupState[field.id]}
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
            <FormAction handleSubmit={handleSubmit} text="Signup" />
            </div>

         

      </form>
    )
}