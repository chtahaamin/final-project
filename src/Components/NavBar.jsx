import {useNavigate,Link} from "react-router-dom"


const NavBar=()=>{
    return (
    <>
    <div>
        <div><h1>Magic Quote</h1></div>
        <div>
            <Link to ="/Login">signIn</Link>
            <Link to="/signup">Signup</Link>
        </div>
    </div>
    </>

    )
}
export default NavBar;