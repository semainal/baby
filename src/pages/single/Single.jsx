import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
import Header from "../../components/header/Header"

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