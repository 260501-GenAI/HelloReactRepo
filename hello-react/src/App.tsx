import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { FirstComponent } from './Components/FirstComponent'
import { Dashboard } from './Components/Dashboard'

function App() {

  //This is a comment in Typescript

  return (
    <>
      <h1>Hello React!</h1>

      <p>We are writing in TSX, which is like HTML for React Typscript apps</p>

      <h3>React will reload the app with every saved change to the source code</h3>

      {/* This is a comment in TSX. autogen one with: ctrl + / */}

      <p>Check out this custom component: </p>

      <FirstComponent/>

      {/* ROUTING - how we DYNAMICALLY render components 
      Routing is URL-based. The components that get rendered are determined by the /URL on the browser
      
      TODO: more notes*/}
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
