import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"


export default function Settings() {

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">
                Update Your Account
            </span>
            <span className="settingsDeleteTitle">
                Delete Account
            </span>
        </div>
        <form className="settingsForm" >
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img 
                src="https://cdn.pixabay.com/photo/2013/02/21/19/10/mother-84628_960_720.jpg" 
                alt="" 
                />
                <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text"   />
            <label>Email</label>
            <input type="email"  />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit" type="submit">Update</button>
            
        
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
