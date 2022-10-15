
import './App.css';
import Navba from './Navba';
import IndividualIntervalsExample from './IndividualIntervalsExample';
import Footer from './Footer';
import Topbar from './Topbar';



import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './About';
import Login from './Login.jsx';
import Signup from './Signup';

function App() {
  return (
    <>
    <Topbar/>
   <Navba/> 

   {/* <Signup/> */}

   <Routes>
   <Route exact path="/" element={   <IndividualIntervalsExample/>} />
                {/* <Route path="/about" component={About} /> */}
                <Route path="/login" element={ <Login />} />
                <Route path="/signup" element={ <Signup />} />
                <Route component={Error} />
            </Routes>

{/* <Footer/> */}
   
   </>
  );
}

export default App;
