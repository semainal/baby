import Header from "../../components/header/Header"
import "./write.css"




export default function Write() {

  return (
    <>
    <Header/>
    <p className="writeTitle">What did you do today? Tell me <i class="fa-regular fa-face-smile"></i></p>
    <div className="write">
       <img className="writeImg"
        src="https://cdn.pixabay.com/photo/2014/07/11/22/05/baby-390555_960_720.jpg"
        alt="" />
        
        <form className="writeForm" >
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>

            <div className="writeFormGroup">
                <textarea placeholder="Tell Your Story.." type="text" className="writeInput writeText" ></textarea>
            </div>

            <button className="writeSubmit" type="submit">
                Save
            </button>
            
        </form>

        </div>
        </>
  )
}
