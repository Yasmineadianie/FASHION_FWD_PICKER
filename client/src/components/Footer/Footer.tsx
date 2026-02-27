import { Col, Container, Row } from "react-bootstrap"


export const Footer = () => {
  return (
    
 <footer className="bg-success text-black py-4 mt-auto p-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Fashion FwD Picker</h5>
            <p>wear the future forward</p>
          </Col>

          <Col md={3}>
            <h6>Links</h6>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </Col>

          <Col md={3}>
            <h6>Contact</h6>
            <p>📍 address</p>
            <p>✉️  info@fashionfwd.com</p>
            <p>📞 +34 632 001 000</p>
          </Col>
 <Col md={4}>
            <h6>Where we are</h6>
            
          </Col>

        </Row>

        <hr />

        <p className="text-center mb-0">
          © {new Date().getFullYear()} Fashion FwD Picker
        </p>
      </Container>
    </footer>



    
  
  )
}
