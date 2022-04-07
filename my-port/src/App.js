// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'



  
function App() {

  function sayHello(){
    alert("hello!")
  }  

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div className='body'>
      <Routes>
        <Route to='/' element={<Main />}>Home</Route>
          <Route to='/About' >About</Route>
          <Route to='/Resume' >Resume</Route>
          <Route to='/Portfolio' >My Projects</Route>
          <Route to='/Links' >Contact Me</Route>
      </Routes>
      </div>
      <div className="Footer">
        <Button text="Awesome Button" sayHello={sayHello}/>
      </div> 
        
    </div>
  );
}

export default App;