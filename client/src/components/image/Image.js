
import React, { Component } from "react";
import "../image/style.css";
import API from "../../utils/api";
// import { arrayBufferToBlob } from "blob-util";
// import { canvasToBlob } from 'blob-util';



class Image extends Component{

    state = {
        image: null,
    }

    componentDidMount(){
        const constraints = {
            audio: false,
            video: true
          };
        navigator.mediaDevices.getUserMedia(constraints).then(this.handleSuccess).catch(this.handleError);
    }

    handleError = (error) => {
        console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
      }

    handleSuccess = (stream) => {
        const video = document.querySelector('video');
        window.stream = stream; // make stream available to browser console
        video.srcObject = stream;
      }

    takePicture = (event) => {
        event.preventDefault()
        const video = document.querySelector('video');
        const canvas = window.canvas = document.querySelector('canvas');
        canvas.width = 480;
        canvas.height = 360;
        // console.log("Hello")
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        const data = canvas.toDataURL('image/png');
        document.querySelector("#camera--output").setAttribute('src', data);
        this.setState({image: data})
        console.log(document.querySelector("#camera--output").getAttribute("src"))
    }


    sendImage = (event) => {
        event.preventDefault()
        console.log("Hello")
        // const Blob = arrayBufferToBlob;
        const blob = new Blob([this.state.image], {type: 'image/png'});
        const url = URL.createObjectURL(blob);
        console.log(url, "WORK")
        API.storeImage(url)
            // .then(res => this.setState({ image: res.data }))
            .catch(err => console.log(err));
            console.log("store")
        //const canvas = window.canvas = document.querySelector('canvas');
        //const data = canvas.toDataURL('image/png');
        //push.document.querySelector("#camera--output").getAttribute("src")

        
        // handle image submit function 
        // post
    }

  

    // render (){
    //     return(
    //         <div id="container">


       render (){
        return(
            <div id="container">

                <form className="box" enctype="multipart/form-data">
                    <div className="image">
                            <div class="photos">
                            <main id="camera">
                                <video id="camera--view" autoPlay playsInLine></video>
                                <canvas id="camera--sensor"></canvas>
                                <img src="//:0" alt="" id="camera--output"/>
                                <button id="camera--trigger" type="button" onClick={this.takePicture}>Scan Fruits</button>
                                <button id="send--image" type="submit" onClick={this.sendImage}>Get Nutrition</button>
                            </main>
                            </div>
                    </div>
                </form>
            

            </div>
        );
    }
}

export default Image;