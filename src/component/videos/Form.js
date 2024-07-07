import {React,useState} from "react"
export const Form=({setYoutubeLink})=>{

    const [input,setInput]= useState('');
    const handleSubmit=(e)=>{

        e.preventDefault();
        setYoutubeLink(input);
        setInput('');
    }
    return(
        <div>
            <form className="form-group custom-form" onSubmit={handleSubmit} >
        <label>Enter youtube URL</label>
        <input type="text" className="form-control custom-input" placeholder="Enter Link"  required
        onChange={e=>setInput(e.target.value)} value={input||''}/>
        <button type="submit" className="btn btn-success btn-md">Submit</button>
    </form></div>
    )
}