// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Footer from './components/Footer'
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
      <main>
        <Main />
      </main>
      <Routes>
        <Route to='/' element={<Main />}>Home</Route>
          <Route to='/About' >About</Route>
          <Route to='/Resume' >Resume</Route>
          <Route to='/Portfolio' >My Projects</Route>
          <Route to='/Links' >Contact me</Route>
      </Routes>
      


       
        
      <div className="Footer">
        <Button text="Awesome Button" sayHello={sayHello}/>
        <Footer />
      </div> 
        
    </div>
  );
}

export default App;