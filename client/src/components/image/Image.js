import React, { Component } from "react";
import "../image/style.css";

class Image extends Component{

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
        console.log(document.querySelector("#camera--output").getAttribute("src"))
    }

    render (){
        return(
            <div id="container">

                <form className="box" enctype="multipart/form-data">
                    <div className="image">
                        <main id="camera">
                            <video id="camera--view" autoPlay playsInLine></video>
                            <canvas id="camera--sensor"></canvas>
                            <img src="//:0" alt="" id="camera--output"/>
                            <button id="camera--trigger" type="button" onClick={this.takePicture}>Scan Fruits</button>
                        </main>
                    </div>
                </form>
            

            </div>
        );
        }
    }

export default Image;