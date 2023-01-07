import "./playGames.css"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




export default function PlayGames() {
  return (
    <>
    <Header/>
    <p className="gamesLgTitle">Play Games</p>
    <div className="games">
        <div className="gamesRow">
        <Row xs={1} md={2} className="g-4">
  
        <Col>
          <Card className="gamesCard">
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/05/07/22/37/play-2293838_960_720.jpg" className="gamesImg" />
            <Card.Body className="gamesBody">
              <Card.Title className="gamesTitle">Card title</Card.Title>
              <Card.Text className="gamesText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquid id, atque molestiae cupiditate deleniti saepe dolores animi laborum. Quasi libero, ea magni nesciunt atque exercitationem porro iure sunt, suscipit cumque quae repellat saepe a facere tempora tempore? Cupiditate nesciunt quis minima est, corrupti dolores, ipsa vel architecto voluptates explicabo quaerat similique officiis consectetur, ratione iste. Porro quidem delectus dolorum cupiditate, corporis dignissimos sed enim autem dolor ipsum fugiat ratione ab earum debitis nulla a explicabo, magni nisi cumque aspernatur maiores quo ipsa praesentium quod! Animi vitae dolor fuga molestiae libero quo ex, nemo quis itaque perferendis cum odio repudiandae.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
<Card className="gamesCard">
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/05/07/22/37/play-2293838_960_720.jpg" className="gamesImg" />
  <Card.Body className="gamesBody">
    <Card.Title className="gamesTitle">Card title</Card.Title>
    <Card.Text className="gamesText">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquid id, atque molestiae cupiditate deleniti saepe dolores animi laborum. Quasi libero, ea magni nesciunt atque exercitationem porro iure sunt, suscipit cumque quae repellat saepe a facere tempora tempore? Cupiditate nesciunt quis minima est, corrupti dolores, ipsa vel architecto voluptates explicabo quaerat similique officiis consectetur, ratione iste. Porro quidem delectus dolorum cupiditate, corporis dignissimos sed enim autem dolor ipsum fugiat ratione ab earum debitis nulla a explicabo, magni nisi cumque aspernatur maiores quo ipsa praesentium quod! Animi vitae dolor fuga molestiae libero quo ex, nemo quis itaque perferendis cum odio repudiandae.
    </Card.Text>
  </Card.Body>
</Card>
</Col>



    </Row>

    <Row xs={1} md={2} className="g-4">
    <Col>
<Card className="gamesCard">
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/05/07/22/37/play-2293838_960_720.jpg" className="gamesImg" />
  <Card.Body className="gamesBody">
    <Card.Title className="gamesTitle">Card title</Card.Title>
    <Card.Text className="gamesText">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquid id, atque molestiae cupiditate deleniti saepe dolores animi laborum. Quasi libero, ea magni nesciunt atque exercitationem porro iure sunt, suscipit cumque quae repellat saepe a facere tempora tempore? Cupiditate nesciunt quis minima est, corrupti dolores, ipsa vel architecto voluptates explicabo quaerat similique officiis consectetur, ratione iste. Porro quidem delectus dolorum cupiditate, corporis dignissimos sed enim autem dolor ipsum fugiat ratione ab earum debitis nulla a explicabo, magni nisi cumque aspernatur maiores quo ipsa praesentium quod! Animi vitae dolor fuga molestiae libero quo ex, nemo quis itaque perferendis cum odio repudiandae.
    </Card.Text>
  </Card.Body>
</Card>
</Col>

<Col>
<Card className="gamesCard">
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/05/07/22/37/play-2293838_960_720.jpg" className="gamesImg" />
  <Card.Body className="gamesBody">
    <Card.Title className="gamesTitle">Card title</Card.Title>
    <Card.Text className="gamesText">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquid id, atque molestiae cupiditate deleniti saepe dolores animi laborum. Quasi libero, ea magni nesciunt atque exercitationem porro iure sunt, suscipit cumque quae repellat saepe a facere tempora tempore? Cupiditate nesciunt quis minima est, corrupti dolores, ipsa vel architecto voluptates explicabo quaerat similique officiis consectetur, ratione iste. Porro quidem delectus dolorum cupiditate, corporis dignissimos sed enim autem dolor ipsum fugiat ratione ab earum debitis nulla a explicabo, magni nisi cumque aspernatur maiores quo ipsa praesentium quod! Animi vitae dolor fuga molestiae libero quo ex, nemo quis itaque perferendis cum odio repudiandae.
    </Card.Text>
  </Card.Body>
</Card>
</Col>
</Row>


        </div>

       


    <Sidebar/>

    

     
  

</div>
    

    

      
     

    
    </>
  )
}
