import React, {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Org() {
    const [data, setData] = useState({
        id:"",
        status: ""
    })
    const [update,setUpdate] = useState("ordered")
    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
    const url = `http://127.0.0.1:3000/api/v1/orders/${data.id}`
    toast.configure()
    function submit(e){
        e.preventDefault()
        axios.patch(url,{
            id: data.id,
            status: update
        })
        .then(res => {
            console.log(res.data)
            console.log("success")
            toast('🦄 Status updated successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
    }
    return (
        <div>
            <div className="container">  
                <form id="contact" onSubmit={(e) => submit(e)}>
                    <h3>Speed Logistic</h3>
                    <h4>Product Status</h4>
                    <fieldset>
                    <input placeholder="Enter Order ID" onChange = {(e)=>handle(e)} value={data.id} id = "id" name = "id" type="number" tabIndex="1" required autoFocus />
                    </fieldset>
                    {/* <fieldset>
                    <input placeholder="update Status" onChange = {(e)=>handle(e)} id = "status" name = "status" value={data.status} type="text" tabIndex="2" required/>
                    </fieldset> */}
                    <fieldset>
                        <label htmlFor="status" style={{marginRight:"1rem"}}>select status</label>
                        
                        <select 
                            name="status" 
                            id="status" 
                            value={update} 
                            onChange={(e) => {
                                const selectedUpdate = e.target.value
                                setUpdate(selectedUpdate)
                            }}>
                            <option value="ordered">Ordered</option>
                            <option value="packed">Packed</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="returned">Returned</option>
                            <option value="refunded">Refunded</option>
                        </select>
                    </fieldset>
                    <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    <p>{update}</p>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Org
