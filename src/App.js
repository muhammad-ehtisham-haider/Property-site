import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavScrollExample from './components/Navbar';
import Main from './components/Main';
import Logos from './components/Logos';
import { Cards } from './components/cards/Cards';
import Accordian from './components/Accordian/Accordian';
import Contact from './components/contact/Contact';
import { Homz } from './components/homz/Homz';


function App() {
  return (
    <>
    <NavScrollExample/>
    <Main/>
    <div id="logo">
    <Logos/>
    </div>
    <div id="card">
    <Cards/>
    </div>
    <div id="value">
    <Accordian/>
    </div>
    <div id="contac">
    <Contact/>
    </div>
   <div id="started">
   <Homz/>
   </div>
    

    </>
  );
}

export default App;
