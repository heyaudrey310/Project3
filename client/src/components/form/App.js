import React from "react";
import Form from "./Form";


console.log(process.env.REACT_APP_RECIPE_API_KEY);
console.log(process.env.REACT_APP_MICROSOFT_AZURE_API_KEY);

function App() {
    
    return <Form />;
}

export default App;