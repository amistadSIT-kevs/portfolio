import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import kev from '../assets/kev.jpg'; 
import background from '../assets/back.jpg';

const Home = () => {
const sectionStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  width: '100vw', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  padding: 0
};

  return (
    <section 
      style={sectionStyle}
      className="text-center text-white position-relative overflow-hidden"
    >
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{ 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4), rgba(0,0,0,0.8))', 
          zIndex: 0 
        }}
      ></div>

      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            
            <div className="mb-4 text-center d-flex justify-content-center">
              <Image 
                src={kev} 
                alt="Kevin Amistad"
                roundedCircle
                className="border border-2 border-secondary shadow-lg object-fit-cover"
                style={{ width: '180px', height: '180px' }}
              />
            </div>

            <h1 className="display-3 fw-bold mb-3">
              Kevin Amistad
            </h1>
            
            <div className="d-flex align-items-center justify-content-center mb-4 text-info text-uppercase fw-semibold" style={{ letterSpacing: '0.2rem', fontSize: '0.9rem' }}>
              <div className="bg-info me-3" style={{ height: '1px', width: '30px' }}></div>
              BSIT Student @ University of Baguio
              <div className="bg-info ms-3" style={{ height: '1px', width: '30px' }}></div>
            </div>

            <p className="lead text-secondary-emphasis mb-5">
              <span className="text-white fw-medium"> Aspiring to be in Full-Stack Development and Java Systems</span>.
            </p>

            <div className="d-flex gap-3 justify-content-center">
              <Button as={Link as any} to="/projects" variant="light" size="lg" className="rounded-pill px-4 fw-bold">
                View Projects
              </Button>

              <Button as={Link as any} to="/contact" variant="outline-light" size="lg" className="rounded-pill px-4 fw-bold">
                Contact Me
              </Button>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;