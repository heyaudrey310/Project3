import React from "react";
import "../image/style.css";

function Image(){
    return(
        <div className="photo">
            <video playsinline autoplay></video>
            <button>Take snapshot</button>
            <canvas></canvas>
        </div>
    );
}

export default Image;