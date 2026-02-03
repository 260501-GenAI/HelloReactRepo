import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login:React.FC = () => {

    //We're going to use the useNavigate hook to PROGRAMMATICALLY switch URLS
    const navigate = useNavigate()

    return(
        // TODO: style this with a .css file
        <div className="container">
            <h2>Log In to the App:</h2>
            <div className="login-card">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button onClick={() => navigate("/dashboard")}>Login</button>
            </div>
        </div>
    )

}