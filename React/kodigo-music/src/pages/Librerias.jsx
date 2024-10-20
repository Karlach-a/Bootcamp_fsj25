import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import album1 from "../assets/images/Dday.jpg";
import album2 from "../assets/images/Golden.jpg";
import album3 from "../assets/images/LP.jpg";
import album4 from "../assets/images/LY.jpg";
import album5 from "../assets/images/ook.jpg";
import album6 from "../assets/images/SN.jpg";

 const Librerias = () => (
  

        <>
            <div>
                <h1>Tu Biblioteca</h1>
                <h4>Tus Artistas  Favoritas</h4>
            </div>

            <div className='row'>
            <div className='col-md-3'>
                <Card style={{ width: '18rem', margin:'1rem'}}>
                    <Card.Img variant="top" src={album1} />
                    <Card.Body>
                        <Card.Title>Dday</Card.Title>
                        <Card.Text>
                            Agust-D
                        </Card.Text>
                        <Button variant="dark">Play</Button>
                    </Card.Body>
                </Card>

           </div>
            <div className='col-md-3'>
           <Card style={{ width: '18rem', margin:'1rem' }}>
                    <Card.Img variant="top" src={album2} />
                    <Card.Body>
                        <Card.Title>Golden</Card.Title>
                        <Card.Text>
                           JeongKook
                        </Card.Text>
                        <Button variant="dark">Play</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className='col-md-3'>
           <Card style={{ width: '18rem', margin:'1rem' }}>
                    <Card.Img variant="top" src={album3} />
                    <Card.Body>
                        <Card.Title>Empty Machine</Card.Title>
                        <Card.Text>
                           Linkin Park
                        </Card.Text>
                        <Button variant="dark">Play</Button>
                    </Card.Body>
                </Card>
                </div>

                <div className='col-md-3'>
                <Card style={{ width: '18rem', margin:'1rem' }}>
                    <Card.Img variant="top" src={album4} />
                    <Card.Body>
                        <Card.Title>Love Yourself</Card.Title>
                        <Card.Text>
                           BTS
                        </Card.Text>
                        <Button variant="dark">Play</Button>
                    </Card.Body>
                </Card>

           </div>
            <div className='col-md-3'>
           <Card style={{ width: '18rem' , margin:'1rem'}}>
                    <Card.Img variant="top" src={album5} />
                    <Card.Body>
                        <Card.Title>Luxury Disease</Card.Title>
                        <Card.Text>
                           One Ok Rock
                        </Card.Text>
                        <Button variant="dark">Play</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className='col-md-3'>
           <Card style={{ width: '18rem', margin:'1rem'  }}>
                    <Card.Img variant="top" src={album6} />
                    <Card.Body>
                        <Card.Title>All hope is gone</Card.Title>
                        <Card.Text>
                           Slipknot
                        </Card.Text>
                        <Button variant="dark">Play</Button>
                    </Card.Body>
                </Card>
                </div>
                </div>  
        </>
    

);
export default Librerias;