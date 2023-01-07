

import "./singlePost.css"

export default function SinglePost() {


    return (
        


   

        <div className="singlePost">

            <div className="singlePostWrapper">
        
                    <img src="https://cdn.pixabay.com/photo/2012/03/04/00/38/baby-21998_960_720.jpg"
                        alt=""
                        className="singlePostImg" />
        

                <input type="text" value="" className="singlePostTitleInput"  /> 
                    
                        <h1 className="singlePostTitle">
                           Title
                          
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon fa-regular fa-pen-to-square" ></i>
                                    <i className="singlePostIcon fa-solid fa-trash" ></i>
                                </div>
                            
                        </h1>



                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:
                       
                            <b>Sema İnal</b>
                      
                    </span>
                    <span className="singlePostDate">7 Ocak 2023</span>
                    
                </div>
                <textarea className="singlePostDescInput" value="" />
                    <p className="singlePostDesc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iusto magni deserunt explicabo dolor ut inventore dicta vero neque, tenetur dolores, quo facilis quibusdam autem est voluptatem a rerum vel? </p>
             
                    <button className="singlePostButton" >
                        Update</button>
                


            </div>

        </div>
  
    )
}
