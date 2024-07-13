import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";

const PracticeForm = () => {

    const [errMessage,setErrMessage] = useState(null);

    const names = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSubmitClick = ()=>{
        console.log(names);
        console.log(email);
        console.log(password);

        const message = checkValidateData(names.current.value,email.current.value,password.current.value);
        setErrMessage(message);
        console.log(message);
        
    
    }

    return (
    <div>
        <form onSubmit={(e)=>{e.preventDefault()}} className="m-48">
            <input ref={names} type="text" placeholder="Full Name" className="border border-black p-4 my-4 w-6/12"/><br/>
            <input ref={email} type="text" placeholder="Email Address" className="border border-black p-4 my-4 w-6/12"/><br/>
            <input ref={password} type="password" placeholder="Password" className="border border-black p-4 my-4 w-6/12"/><br/>
            <p className="text-red-600 text-sm">{errMessage}</p>
            <button className="border border-black p-4 my-4" onClick={handleSubmitClick}>Submit</button>
        </form>
    </div>
    )
}

export default PracticeForm