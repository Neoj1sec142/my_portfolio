// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Footer from './components/Footer'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'



  
function App() {

  function sayHello(){
    alert("hello!")
  }  

  return (
    <div className="App">
      <Routes>
        <Route path="/components/Resume" element={ <Nav /> } />
      </Routes>
      


       <Header />
        <img src="./components/DSC_2376.jpg" id="portpic"/>
      <div className="Main">
        <h1>About Me:</h1>
        <p>
        Full stack web developer and photographer who enjoys providing 
        insightful solutions to complex problems. With a passion for 
        precision and creativity I offer a creative problem solver 
        who can assess and overcome..
        </p>
      </div>
      <div className="Footer">
        <Button text="Awesome Button" sayHello={sayHello}/>
        <Footer />
      </div> 
        
    </div>
  );
}

export default App;