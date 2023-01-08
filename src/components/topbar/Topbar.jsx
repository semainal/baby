import { useContext } from "react";
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import "./topbar.css"

export default function Topbar() {
  const {user, dispatch }= useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  }

  return (
    

    <>
    <div className='topbar'>
    <div className='top'>
      
      <div className="topLeft">
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      <i className="topIcon fa-brands fa-linkedin"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>


      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
            <Link className="link" to="/" >HOME</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/about" >ABOUT</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/contact" >CONTACT</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/write" >WRITE</Link>
            </li>
            <li className="topListItem" onClick={handleLogout} >
            {user && "LOGOUT"}
            </li>
           
        </ul>
      </div>
      <div className="topRight">
        
        
      {
          user ? (
            <Link to="/settings">
            <img className="topImg" 
          src={PF + user.profilePic}
          alt="" />
            </Link>
          
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
              </li>
            
              <li className="topListItem">
                <Link className="link" to="/register">REGISTER</Link>
              </li>
            </ul>
          )

        }
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass">
        
        </i>
      </div>
    </div>

    </div>

    </>
  )
}
