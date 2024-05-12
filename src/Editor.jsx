import React, { useState } from "react";
import './style.css';
import Footer from "./Footer";
import Header from "./Header";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor () {
    const [value, setValue] = useState('');
    return (
        <React.Fragment>
            <Header />
            <div
                class="p-5 container"

            >
                
            <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
            
        <Footer />
        </React.Fragment>
    )
};

export default Editor;