import {Link} from "react-router-dom"
import {useContext} from "react"
import { LoginContext  } from "./LoginContext"
import './NavBar.css'


const NavBar=()=>{
    const {loggedIn,logout} = useContext(LoginContext)
    const handleClick=()=>{
        logout()
        localStorage.removeItem('isLoggedIn');
    }
    return (
    <>
    <div className ="navbar container">
        <div ><h1 className="Navbar-H1">magic Quote</h1></div>
        <div className="btn-div">
          { loggedIn?(<Link  className ="linkSignInBtn"to ="/Login" onClick ={handleClick}>logout</Link>): (<><Link  className ="linkSignInBtn"to ="/Login">logIn</Link>
            <Link className ="linkSignUpBtn" to="/signup">Signup</Link></>)
          }</div>
    </div>
    </>

    )
}
export default NavBar;