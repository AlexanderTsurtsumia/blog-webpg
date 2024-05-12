import React, { useEffect, useState  } from "react";
import './style.css';
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
import { useParams } from "react-router-dom";


function Detailed() {
    const [data, setData] = useState([]);
    const { id} = useParams();

    useEffect(function(){
        axios.get("https://apitest.reachstar.io/blog/get/" + id).then(function(response){
            setData(response.data)
            }).catch(function(error){
                console.log(error)
        });
    },[]);


    return (
        <React.Fragment>
                <Header />
                <div className="container   w-75 p-5 container mt-5 mb-5 d-flex justify-content-center ">
                    <div
                        class="row  mom w-100 mt-3 p-5 justify-content-center align-items-center g-2"
                    >
                        <div class="col-12">

                                <div className="textcard pt-4">
                                    <div class="col-12 text-left">
                                        <h2 className="" dangerouslySetInnerHTML={{__html: data.title}}></h2>
                                        <p className="" dangerouslySetInnerHTML={{__html: data.description}}></p>  
                                        <p className="txt"></p>
                                        <button className="btn btn-danger">Delete</button>                                    
                                        <hr className="mt-5 btmline"/>                           
                                    </div> 
                                </div>

                                <div className="comments">
                                    {
                                        data.comments.map((item) => console.log(item.comment))
                                    }
                                </div>
                        </div>
                    </div>
                </div>
                <Footer />
                </React.Fragment>
    )
}





export default Detailed;