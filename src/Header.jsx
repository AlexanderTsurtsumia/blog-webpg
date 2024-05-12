import './style.css';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    function tologin ( ) {
        navigate ("/")
    }
    return(
        <header className="mb-5 header"> 
        
           <div
            class="row w-100 justify-content-between align-items-center g-2 header"
           >
            <div class="col ps-5">
                <h1 className="headlogo">typology</h1>
            </div>
            <div class="col pe-3">
                <nav class="nav justify-content-center  ">
                    <a class="nav-link" href="/Home">HOME</a>
                    <a class="nav-link" href="/">Log In</a>
                    <a class="nav-link" href="/Signup">Sign up</a>
                    <button type="button"  data-bs-toggle="offcanvas" data-bs-target="#Id1" aria-controls="Id1" className="burger">|||</button>
                   
                    
                    <div
                        class="offcanvas offcanvas-end"
                        data-bs-scroll="true"
                        tabindex="-1"
                        id="Id1"
                        aria-labelledby="Enable both scrolling & backdrop"
                    >
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="Enable both scrolling & backdrop">
                                Account serings
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="offcanvas-body mt-5">
                            <button className='my-5 py-3 btn w-100 btn-primary log-btn' onClick={()=> tologin()}>Log Out</button>
                        </div>
                    </div>
                    
                </nav>
            </div>
           </div>
           
        </header>
    )
}


export default Header;