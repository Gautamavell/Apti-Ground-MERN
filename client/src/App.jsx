import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Test from './Test'
import Dashboard from './Dashboard';
import Result from './Result';
import About from './About';
import Service from './Service';
import Terms from './Terms';
import Contact from './Contact';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/terms' element={<Terms/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/testlr' element={<Test type='testlr'/>}></Route>
        <Route path='/testqa' element={<Test type='testqa'/>}></Route>
        <Route path='/test25' element={<Test type='test25'/>}></Route>
        <Route path='/testlr/result' element={<Result type='scorelr' test='Logical and Reasoning'/>}></Route>
        <Route path='/testqa/result' element={<Result type='scoreqa' test='Quantitative Analysis'/>}></Route>
        <Route path='/test25/result' element={<Result type='score25' test="Today's 25"/>}></Route>
      </Routes>    
    </BrowserRouter>
  )
}

export default App
