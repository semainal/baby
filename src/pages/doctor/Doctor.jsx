import Header from "../../components/header/Header"

import "./doctor.css"

export default function Doctor() {
  return (

    <>
   
    <Header/>
    <p className="doctorTitle">Health Information</p>
    <div className="doctor">
    <table cellPadding={"5"} cellSpacing={5} className="doctorTable">
       <tr>
        <th>Aşı Adı / <br/> Zamanı</th>
        <th>Doğumda</th>
        <th>1.Ay <br/> Sonunda</th>
        <th>2.Ay <br/> Sonunda</th>
        <th>4.Ay <br/> Sonunda</th>
        <th>6.Ay <br/> Sonunda</th>
        <th>9.Ay <br/> Sonunda</th>
        <th>12.Ay <br/> Sonunda</th>
        <th>18.Ay <br/> Sonunda</th>
        <th>24.Ay <br/> Sonunda</th>
        <th>48.Ay <br/> Sonunda ***</th>
        <th>13 <br/> Yaşında</th>
       </tr>

       <tr>
        <th>Hepatit B</th>
        <th className="hepatitB">I <br/> <input type="checkbox" /></th>
        <th className="hepatitB">II <br/> <input type="checkbox" /></th>
        <th></th>
        <th></th>
        <th className="hepatitB">III <br/> <input type="checkbox"/></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
       </tr>

       <tr>
        <th>BCG <br/>(Verem)</th>
        <th></th>
        <th></th>
        <th className="BCG"> I <br/> <input type="checkbox"/></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
       </tr>

       <tr>
        <th>DaBT -İPA -Hib <br/>(5'li Karma Aşı)</th>
        <th></th>
        <th></th>
        <th className="DaBT"> I <br/> <input type="checkbox"/></th>
        <th className="DaBT"> II <br/> <input type="checkbox"/></th>
        <th className="DaBT"> III <br/> <input type="checkbox"/></th>
        <th></th>
        <th></th>
        <th className="DaBT"> R <br/> <input type="checkbox"/></th>
        <th></th>
        <th></th>
        <th></th>
       </tr>

       <tr>
        <th>KPA* <br/>(Konjüle Pnömokok Aşısı)</th>
        <th></th>  
        <th></th>
        <th className="KPA"> I <br/> <input type="checkbox"/></th>
        <th className="KPA"> II <br/> <input type="checkbox"/></th>
        <th ></th>
        <th></th>
        <th className="KPA"> R <br/> <input type="checkbox"/></th>
        <th ></th>
        <th></th>
        <th></th>
        <th></th>
       </tr>

       <tr>
        <th>KKK <br/>(Kızamık Kızamıkcık <br/> Kabakulak)</th>
        <th></th>  
        <th></th>
        <th></th>
        <th></th>
        <th ></th>
        <th className="KKK"> ID** <br/> <input type="checkbox"/></th>
        <th className="KKK">I <br/> <input type="checkbox"/></th>
        <th ></th>
        <th></th>
        <th className="KKK">II <br/> <input type="checkbox"/></th>
        <th></th>
       </tr>

       <tr>
        <th>DaBT -İPA <br/>(4'lü Karma Aşı)</th>
        <th></th>  
        <th></th>
        <th > </th>
        <th > </th>
        <th ></th>
        <th></th>
        <th ></th>
        <th></th>
        <th></th>
        <th className="IPA"> R <br/> <input type="checkbox"/></th>
        <th></th>
       </tr>

       <tr>
        <th>OPA <br/>(Çocuk Felci Aşısı)</th>
        <th></th>  
        <th></th>
        <th></th>
        <th> </th>
        
        <th className="OPA"> I <br/> <input type="checkbox"/></th>
        <th></th>
        <th ></th>
        <th className="OPA">II <br/> <input type="checkbox"/></th>
        <th></th>
        <th ></th>
        <th ></th>
       </tr>

       <tr>
        <th>Td <br/>(Erişkin Tipi Difteri -<br/> Tetanoz Aşısı)</th>
        <th></th>  
        <th></th>
        <th > </th>
        <th ></th>
        <th ></th>
        <th></th>
        <th > </th>
        <th ></th>
        <th></th>
        <th></th>
        <th className="Td">R <br/> <input type="checkbox"/></th>
       </tr>

       <tr>
        <th>Hepatit A</th>
        <th></th>  
        <th></th>
        <th></th>
        <th ></th>
        <th></th>
        <th ></th>
        <th ></th>
        <th className="HepatitA"> I <br/> <input type="checkbox"/></th>
        <th className="HepatitA"> II <br/> <input type="checkbox"/></th>
        <th></th>
        <th></th>
       </tr>

       <tr>
        <th>Suçiçeği</th>
        <th></th>  
        <th></th>
        <th></th>
        <th></th>
        <th ></th>
        <th ></th>
        <th className="Sucicegi"> I <br/> <input type="checkbox"/></th>
        <th></th>
        <th ></th>
        <th></th>
        <th></th>
       </tr>

       

    </table>

    <div className="appointmentBox">
    <label for="meeting-time">Last Appointment:</label>
    <br/>
    <input className="last" type="datetime-local" id="meeting-time"
       name="meeting-time" value="2023-01-12T19:30"
       min="2018-06-07T00:00" max="2023-01-14T00:00"/>
       <br/>

<label for="meeting-time" className="next">Next Appointment:</label>
    <br/>
    <input className="next" type="datetime-local" id="meeting-time"
       name="meeting-time" value="2023-02-12T19:30"
       min="2018-06-07T00:00" max="2023-02-14T00:00"/>
       <br/>
     <button className="doctorSubmit" type="submit">
                SAVE
            </button>
    </div>



    <table className="desc">
    <tr>
        <th>
          *
        </th>
        <th>01.01.2019 tarihinden itibaren doğan bebeklere 2.,4. ve 12.aylarda uygulanacaktır. </th>
       </tr>

<tr >
       <th>
          **
        </th>
        <th>25.09.2019 tarihli BDK kararıyla salgın riski olan bölgelerde 9.-11.ayda ilave bir doz Kızamık içeren aşı (K veya KKK) uygulanacaktır.</th>
       </tr>

       <tr>
        <th>
          ***
        </th>
        <th>11 Temmuz 2016 tarihinde doğanlardan başlamak üzere, 48. ayına girmiş olan tüm Çocuklara uygulanacaktır.1 Temmuz 2016 tarihinden önce doğmuş ve halen ilköğretime başlamamış olan çocukların KKK ikinci dozu ve DaBT-İPA aşısı ise 2020-2021, 2021-2022 ve 2022-2023 eğitim ve öğretim dönemlerinde, ilköğretim 1. sınıfta , okul aşılamaları şeklinde uygulanacaktır. </th>
       </tr>
    </table>

    </div>

    


    </>
  )
}
