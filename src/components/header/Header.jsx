import { Link } from "react-router-dom"
import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Baby</span>
        <span className="headerTitleLg">Diary</span>
      </div>
      <img className="headerImg" src="https://cdn.pixabay.com/photo/2016/04/01/12/20/abstract-1300667_960_720.png" alt="" />
    
      <div className="headerCenter">
        <ul className="headerList">
            
            <li className="headerListItem">
            <Link className="link" to="/doctor" >DOCTOR</Link> 
            </li>
            <li className="headerListItem">
            <Link className="link" to="/playgames" >PLAY GAMES</Link>
            </li>
           
            <li className="headerListItem"  >
            <Link className="link" to="/stories" >STORIES</Link>
            </li>

            <li className="headerListItem"  >
            <Link className="link" to="/meals" >MEALS</Link>
            </li>
           
        </ul>
      </div>
    </div>


  )
}
