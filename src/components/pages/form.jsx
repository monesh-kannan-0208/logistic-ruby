import React,{useEffect,useState} from 'react'
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'
import FormSec from './formSec'

function Form() {
    let history = useHistory();
    const [id,setId] = useState("")
    const [email,setEmail] = useState("")
    const [productId, setProductId] = useState("")
    const [status,setStatus] = useState("")
    
    const url = `http://127.0.0.1:3000/api/v1/orders/${id}`
    useEffect(() => {

    },[])

    const submit = async(e) => {
        e.preventDefault();
        axios.get(url)
        .then(
            (res) => {
                console.log(res.data)
                localStorage.setItem("orderDetails", JSON.stringify(res.data))
            }
        )
        .catch(error => {console.log(error)})
        
    }
    
    return (
        <div>
            <div class="container">  
                <form onSubmit ={(e) => submit(e)} id="contact">
                    <h3>Speed Logistic</h3>
                    <h4>Product status</h4>
                    <fieldset>
                    <input placeholder="Enter Order ID" onChange = {e => setId(e.target.value)} type="number" value={id} tabindex="1" required autofocus/>
                    </fieldset>
                    <fieldset>
                        <label for="status">select status</label>
                        <select name="status" id="status">
                            <option value="ordered" selected>Ordered</option>
                            <option value="packed">Packed</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="returned">Returned</option>
                            <option value="refunded">Refunded</option>
                        </select>
                    </fieldset>
                    <fieldset>
                    <button  name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    
                    </fieldset>
                </form>
                </div>
        </div>
    )
}

export default Form
