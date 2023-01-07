import "./post.css"


export default function Post() {
   
  return (
    <div className="post">
       
             <img 
             className="postImg"
             src="https://cdn.pixabay.com/photo/2014/11/12/22/44/baby-528887_960_720.png"
             alt="" />
   
    <div className="postInfo">
        
        
        <span className="postTitle">Diary 1</span>
     
        
        <hr />
        <span className="postDate">
           7 Ocak 2023
        </span>
   
    </div>

    <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus sint, molestiae exercitationem reprehenderit illo, rerum mollitia a omnis incidunt laboriosam totam deserunt officia perferendis, expedita ab facere dignissimos? Fugiat sequi commodi nesciunt vitae blanditiis perspiciatis ab, harum sint tenetur! Velit beatae modi consequatur molestias neque doloremque voluptas earum possimus distinctio.
    </p>
    </div>
  )
}
