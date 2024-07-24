import {useNavigate,Link} from "react-router-dom"
import './NavBar.css'


const NavBar=()=>{
    return (
    <>
    <div className ="navbar container">
        <div ><h1>magic Quote</h1></div>
        <div className="btn-div">
            <Link  className ="linkSignInBtn"to ="/Login">logIn</Link>
            <Link className ="linkSignUpBtn" to="/signup">Signup</Link>
        </div>
    </div>
    </>

    )
}
export default NavBar;