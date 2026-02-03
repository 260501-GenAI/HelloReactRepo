import './App.css'
import { FirstComponent } from './Components/FirstComponent'

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

    </>
  )
}

export default App
