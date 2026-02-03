import { useState } from "react"

/* Here's our first custom REACT FUNCTION COMPONENT. Components contain view (TSX) and logic (Typescript), all wrapped 
I like to do arrow functions, feel free to look into other ways
This component takes no values (AKA props) hence the empty () => {...}

"export" - We need this to make our Component importable around the app
"const" - A Variable Keyword - the component can't be reassigned, changed, etc.
"React.FC" - Basically a return type. This must return a React (F)unctional (C)omponent
*/
export const FirstComponent:React.FC = () => {

    //Using a React HOOK called useState to manage component data
    //useState lets us define variables. When these variables are changed, the component will reload
    const [count, setCount] = useState<number>(0)
    //count is the variable, setCount is the "mutator" - how we change it
    //<number> just means this is a number type
    //(0) is the default value

    //Here's a TS variable
    const message:string = "I am a value stored in FirstComponent, and rendered in the view"

    //Here's a function that will execute when the button is clicked
    const showMessage = () => {
        alert(message) //bad manners... makes a popup
        setCount(count + 1) //incrementing the count state variable
    }

    return(
        <div style={{border:"2px green solid", borderRadius:"10px", padding: "7px"}}> 
            <h4>Hello from FirstComponent! Click the button:</h4>
            <button onClick={showMessage}>Click me! CLICK MEEEE</button>
            <p>Click Count: {count}</p>
        </div>
    )
 
}