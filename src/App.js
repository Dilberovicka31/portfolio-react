import React from "react"
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App(){
    return(

<div>

    <Router>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/Page1" component = {Page1}/>
        <Route exact path="/Page2" component = {Page2}/>

       
    </Router>
</div>

    )
}
export default App;