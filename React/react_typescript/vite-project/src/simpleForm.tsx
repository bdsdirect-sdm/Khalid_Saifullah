import { useState } from "react"

export default function simpleForm(){
    const[formData:any, setForm:any] = useState('');
    function handleChange(e:any){
        setForm (e.target.value);
    }
    function handleSubmit(prev){
        
    }
    return(
        <div>
            <form>
                <label htmlFor="username" >Enter Username</label>
                <input onChange={handleChange} type="text" name="username" value={username}></input>
            </form>
        </div>
    )
}