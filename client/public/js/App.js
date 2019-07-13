const constraints = { video: { facingMode: "user "}, audio: false};
// const track = "";

const camera = document.querySelector("#camera--view"),
cameraOutput = document.querySelector("#camera--output"),
cameraSensor = document.querySelector("#camera--sensor"),
cameraTrigger = document.querySelector("#camera--trigger");

function Start() {
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
        // eslint-disable-next-line no-undef
        track = stream.getTracks()[0];
        camera.scrObject = stream; 
    }) 
        .catch(function(error) {
        console.error("Yikes. Try Again", error);
    }); 
}

cameraTrigger.onClick = function() {
    cameraSensor.width = camera.videoWidth;
    cameraSensor.height = camera.videoHeight; 
    cameraSensor.getContext("2d").drawImage(camera, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");

};


window.addEventListener("load", Start, false); 