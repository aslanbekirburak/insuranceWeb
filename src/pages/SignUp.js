import React,{useState} from 'react'
import Input from '../components/Input'
import { useHistory  } from 'react-router-dom';
import { URL,statusErrors } from '../constants';

const SingUp = (props) => {
    let history = useHistory();
    const [authField,setName] = useState({firstname:'',lastname:'',email:'',address:''});
    const [status,setStatus] = useState(null);
    const handleSubmit = (event) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({firstname: authField.firstname,lastname: authField.lastname,email: authField.email,address:authField.address })
        }
        fetch(`${URL}/signUp`,requestOptions)
        .then(response => {
            setStatus(response.status);
            if(response.status === 200)
                history.push("/brokers");
        })
        .catch(err=>console.log(err))
        event.preventDefault();
    }
    return(
        <>
            <div style={{flex:1,marginTop:100,display:"flex",justifyContent:"center"}}>
                <form onSubmit={handleSubmit}>
                <Input onChanges={(firstname) => setName({...authField,firstname: firstname})} value={authField.firstname} name="Name" />
                <Input onChanges={(lastname) => setName({...authField,lastname: lastname})} value={authField.lastname} name="Surname" />
                <Input onChanges={(email) => setName({...authField,email: email})} value={authField.email} name="Email" />
                <Input onChanges={(address) => setName({...authField,address: address})} value={authField.address} name="Address" />
                <input type="submit" value="Gönder" style={{width:200,borderRadius:20,color:"#fff",backgroundColor:"#9A879F"}} />
                </form>
            </div>
            {status && <text style={{color:"red",marginTop:20}}>{statusErrors[status]}</text>}
        </>
    )
}

export default SingUp;