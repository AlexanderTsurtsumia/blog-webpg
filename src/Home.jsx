import React, { useEffect, useState  } from "react";
import './style.css';
import { Link, useNavigate} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
function Home() {
    const navigate = useNavigate();
    const [data, setData] = useState([])

    useEffect(function(){
        axios.get("https://apitest.reachstar.io/blog/list").then(function(response){
            setData(response.data)
            }).catch(function(error){
                console.log(error)
        })
    })
    function editorbtn () {
        navigate ("/Editor")
    }

    return (
        <React.Fragment>
                <Header />
                <div className="container   w-75 p-5 container mt-5 mb-5 d-flex justify-content-center ">
                    <div
                        class="row  mom w-100 mt-3 p-5 justify-content-center align-items-center g-2"
                    >
                        <div class="col-12">
                            {
                                data.map(( item, index ) =>
                                <div className="textcard pt-4">
                                    <div class="col-12 text-left">
                                        <p className="card_num">{index+1}</p>
                                        <h2 className="" dangerouslySetInnerHTML={{__html: item.title}}></h2> 
                                        <p className="txt"></p>
                                        <button className="btn btn-danger">Delete</button>                                
                                        <Link to={"/Detailed/" + item.id} className="btn">
                                            see more
                                        </Link>    
                                        <hr className="mt-5 btmline"/>                           
                                    </div> 
                                </div>

                                )
                            }
                            <button className="button add-btn btn w-100 my-5" onClick={()=> editorbtn()}> 
                                <p className="btn-txt">Add Blog</p>
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
                </React.Fragment>
    )
}




export default Home;