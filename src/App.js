import React from "react"
import Home from "./pages/Home";
import AboutMe from "./pages/Aboutme";
import Page2 from "./pages/Work";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Art from "./pages/Art";

function App(){
    return(

<div>

    <Router>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/about" component = {AboutMe}/>
        <Route exact path="/work" component = {Work}/>
        <Route exact path="/contact" component = {Contact}/>
        <Route exact path="/art" component = {Art}/>

       
    </Router>
</div>

    )
}
export default App;