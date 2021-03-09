import React from "react"
import Home from "./components/pages/home/Home";
import AboutMe from "./components/pages/Aboutme";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import Art from "./components/pages/Art";
import NavTabs from "./components/NavTabs";

function App(){
    return(

<div>

    <Router>
        <NavTabs/>
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