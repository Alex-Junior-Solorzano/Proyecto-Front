import React from 'react'
import '../styles/about.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { CardText } from 'reactstrap';

const About = () => {

  return (
    <div>
      <div className="about-section">
        <h1>About us: Kruger Star</h1>
        <p>Somos dos apasionados por la programación, siendo partícipes del reality de Kruger.</p>
      </div>

      <h2 className='h2'>Our Team 4</h2>
      <div className='divPadre'>
        <div className='divHijo'>
          <Row xs={1} md={2} className="g-4">

            <Col>
              <Card>
                <Card.Img variant="top" src={require(`../images/edwin.jpg`)} />
                <Card.Body>
                  <Card.Title>Edwin Miguel Pinchao Mueses</Card.Title>
                  <Card.Subtitle>Developer - Systems Engineer.</Card.Subtitle>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    Hi, Im developer Engineer, I am currently participating in the Kruger Star
                    reality show.Im from of Imbabura- Ibarra. My hobbies are  listening to music,
                    playing soccer and seeing information about
                    of Python and Frameworks.
                  </Card.Text>
                  <Card.Text>miguepinchao1992@gmail.com</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src={require(`../images/Alex.jpg`)} />
                <Card.Body>
                  <Card.Title>Alex Solórzano Vélez</Card.Title>
                  <Card.Subtitle>Developer - Systems Engineer.</Card.Subtitle>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    Hello, I am a Computer Systems Engineer graduated from the Technical
                    University of Manabí. I am currently participating in the Kruger Star
                    reality show. My hobbies are watching movies, listening to music,
                    playing video games and seeing information about the advances
                    of artificial intelligence.
                  </Card.Text>
                  <CardText>alex-solorzano07@hotmail.com</CardText>

                </Card.Body>
              </Card>
            </Col>

          </Row>
        </div>
      </div>

    </div>
  )
}

export default About