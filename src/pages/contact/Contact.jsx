import Header from "../../components/header/Header"


import "./contact.css"

export default function Contact() {
  return (

    <>
 
      <Header/>
    <div className='contact'>
      
      <div className="contactWrapper">
      <div className="contactTitle">
        Contact
      </div>

      <div className="contactInfo">
      <p className="footerAdress">
      <i className="contactIcon fa-solid fa-map-location-dot"></i>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nulla</p>
        <p className="footerTel"> 
        <i className="contactIcon fa-solid fa-phone-volume"></i>
        +90 544321307</p>
        <p className="footerEmail">
        <i className="contactIcon fa-solid fa-at"></i>
        semainal35@gmail.com</p>
      </div>
      </div>
      

    </div>
    </>
  )
}
