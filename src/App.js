import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import Dashboard from './components/dashboard';
import { Routes,Route } from 'react-router-dom';
// import Singledata from './components/singledata';
import UpdatePost from './components/update';
import Additionpost from './components/addPost';
import Viewpost from './components/viewpost';


function App() {
  
  return (
    <div className="App">
     <h1> Hello World </h1>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard />} /> 
      <Route path='/viewpost/:id' element={<Viewpost />} />
      <Route path='/updatepost/:id' element={<UpdatePost />} />
      <Route path='/addpost' element={<Additionpost/>} />
     </Routes>
     
    
    
    </div>
  );
}

export default App;
