import React from 'react'

function FormSec() {
    return (
        <div className="container">
            <form id="contact">
                    <h3>Speed Logistic</h3>
                    <h4>Product status</h4>
                    {/* <fieldset>
                    <input placeholder="Enter Order ID" onChange = {e => setId(e.target.value)} type="number" value={id} tabindex="1" required autofocus/>
                    </fieldset> */}
                    <fieldset>
                    <input placeholder="Email Address" type="email" tabindex="2" required/>
                    </fieldset>
                    <fieldset>
                    <input placeholder="Phone Number" type="tel" tabindex="3" required/>
                    </fieldset>
                    <fieldset>
                    <input placeholder="Product Id" type="url" tabindex="4" required/>
                    </fieldset>
                    <fieldset>
                        <label for="status">select status</label>
                        <select name="status" id="status">
                            <option value="ordered">Ordered</option>
                            <option value="packed">Packed</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="returned">Returned</option>
                            <option value="refunded">Refunded</option>
                        </select>
                    </fieldset>
                    {/* <fieldset>
                    <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
                    </fieldset> */}
                    <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">update</button>
                    </fieldset>
                </form>
        </div>
    )
}

export default FormSec
