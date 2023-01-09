import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Header from "../../components/header/Header"
import SinglePost from "../../components/singlePost/SinglePost"

export default function Single() {
  return (
<>
    <Header/>
    <div className="single">
      
        <SinglePost/>
        <Sidebar/>
        </div>
        </>
  )
}