import { Link } from "react-router-dom"
import "./topbar.css"

export default function Topbar() {
  const user = false;
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
            <li className="topListItem"  >
            {user && "LOGOUT"}
            </li>
           
        </ul>
      </div>
      <div className="topRight">
        
        
       
      <Link className="link" to="/settings" >
      <img className="topImg" 
          src="https://cdn.pixabay.com/photo/2013/02/21/19/10/mother-84628_960_720.jpg"
          alt="" />
      </Link>
            
     
          
        
            <ul className="topList">
              <li className="topListItem">
              <Link className="link" to="/login" >LOGIN</Link>
              </li>
            
              <li className="topListItem">
              <Link className="link" to="/register" >REGISTER</Link>
              </li>
            </ul>
        

        
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass">
        
        </i>
      </div>
    </div>

    </div>

    </>
  )
}
