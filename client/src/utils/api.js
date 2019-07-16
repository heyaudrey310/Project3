import axios from "axios"; 

export default {


    storeImage: function(image){
        console.log("before axios")
        return axios.post("/api/storeImage", {
            imgBase64: image,
        })
        .then(res => console.log("sent image"))
    },

    getNutrition: function(food){

    },
};
