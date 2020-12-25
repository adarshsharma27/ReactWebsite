import Aboutus from './Aboutus';
import './App.css';
import Heading from './Heading';
import Imggallery from './Imggallery'
import Services from './Services';
import Navbar from './Navbar';
import Contactus from './Contactus';
import {Redirect, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar/>
   
  <Switch>
<Route exact path="/" component={Heading}/>
<Route exact path="/aboutus" component={Aboutus}/>
<Route exact path="/services" component={Services}/>
<Route exact path="/gallery" component={Imggallery}/>
<Route exact path="/contactus" component={Contactus}/>
<Redirect to="/"></Redirect>
  </Switch>
  
   </>
   
  );
}

export default App;
