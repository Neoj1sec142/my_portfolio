// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main.js'
import Contact from './pages/Contact'
 
const App = () => {

  return (

    <div className="App">
      
      <header>
        <Nav />
      </header>
      
      <div className='body'>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/About' />
          <Route path='/Resume' />
          <Route path='/Portfolio' />
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </div>
      
      <div className="Footer">
        {/* <input placeholder='Send your Email to Collaborate'/>
        <button>Send</button> */}
      </div> 
        
    </div>
  )
}

export default App;