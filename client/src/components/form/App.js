import React from "react";
import Form from "./Form";
// import home from "../home";
// import image from "../image";


console.log(process.env.REACT_APP_RECIPE_API_KEY);
console.log(process.env.REACT_APP_MICROSOFT_AZURE_API_KEY);

function App() {
    return (
        <div>
             {/* // <Home />
        // <Image /> */}
        <Form />
        </div>
       
    );
}

export default App;