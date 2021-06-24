import React,{useState} from 'react'
import '../components/Input.css'
import Popup from './Pop';

function InputForm() {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <div class="search-container">
                <input type="number"  name="search" placeholder="Enter Order Id" class="search-input" style={{color:'white'}}/>
                    <a onClick={togglePopup} class="search-btn">
                        <i onClick={togglePopup} class="fas fa-search"></i>      
                    </a>
                    {isOpen && <Popup
                        content={<>
                            <b>Design your Popup</b>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <button>Test button</button>
                          </>}
                          handleClose={togglePopup}
                    /> }
            </div>
        </div>
    )
}

export default InputForm
