
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import efsetImg from '../assets/efset.png';
import networkingImg from '../assets/introtonet.png';
import aseanImg from '../assets/asean.png';

const About = () => {
  const categories = [
    { name: "Frontend", skills: ["React.js", "TypeScript"] },
    { name: "Backend", skills: ["Java"] },
    { name: "Database", skills: ["MongoDB", "MySQL"] },
  ];

  const certifications = [
    {
      title: "AI Class ASEAN",
      issuer: "ASEAN Foundation",
      detail: "AI fundamentals and applications in the ASEAN context.",
      link: "https://www.aiclassasean.org/profile?popup=0",
      image: aseanImg,
    },
    {
      title: "Cisco Networking",
      issuer: "Cisco Academy",
      detail: "Fundamental networking concepts and technologies.",
      link: "https://www.netacad.com/certificates/?issuanceId=225d8130-2070-4b60-a786-e8295aa54572",
      image: networkingImg,
    },
    {
      title: "EFSET English",
      issuer: "EF Standard",
      detail: "Score: 76/100 — C2 Proficient (Advanced English).",
      link: "https://cert.efset.org/3QPXi5",
      image: efsetImg,
    }
  ];

  return (
    <section className="py-16 bg-[#faf9f6]">
      <style>
        {`
          .interactive-card {
            transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          }
          .interactive-card:hover {
            transform: translateY(-5px);
            border-color: #cdc9c1 !important;
            box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
          }

          .cert-container {
            height: 180px;
            overflow: hidden;
            border-radius: 6px;
            margin-bottom: 15px;
            background: #fdfdfd;
          }

          .cert-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: grayscale(20%);
            transition: transform 0.5s ease;
          }

          .interactive-card:hover .cert-image {
            filter: grayscale(0%);
            transform: scale(1.05);
          }

          .contact-pill {
            display: inline-flex;
            align-items: center;
            padding: 8px 16px;
            background-color: #f0f0f0;
            border: 1px solid #e5e1da;
            border-radius: 50px;
            color: #5e5b54;
            font-family: monospace;
            font-size: 11px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .contact-pill:hover {
            background-color: #1a1814;
            color: white;
            border-color: #1a1814;
            transform: scale(1.05);
          }

          .cert-link {
            text-decoration: none;
            color: inherit;
          }
        `}
      </style>

      <Container>
        <Row className="justify-content-center">
          <Col lg={11} xl={10}>
            
            {/* Header Section */}
            <div className="mb-6">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#928f85]">
              </span>
              <h1 className="font-serif text-6xl text-[#1a1814] mt-2 mb-3">
                Kevin Amistad
              </h1>
              <h2 className="font-serif text-3xl italic text-[#5e5b54] opacity-80 mb-4">
                Aspiring Full-Stack Developer
              </h2>
              
              <div className="d-flex flex-wrap gap-2">
                <a href="https://github.com/amistadSIT-kevs" target="_blank" rel="noreferrer" className="contact-pill">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/kevin-amistad-351085399/" target="_blank" rel="noreferrer" className="contact-pill">
                  LinkedIn
                </a>
              </div>
            </div>

            <hr className="border-[#e5e1da] mb-12" />

            {/* Technical Stack */}
            <div className="mb-16">
              <h3 className="font-mono text-[10px] tracking-widest uppercase text-[#928f85] mb-6">
                Technical Stack
              </h3>
              <Row className="g-4">
                {categories.map((cat) => (
                  <Col key={cat.name} md={4}>
                    <div className="interactive-card h-100 border border-[#e5e1da] rounded-xl p-5 bg-white shadow-sm">
                      <h4 className="font-mono text-[9px] tracking-widest uppercase text-[#928f85] mb-4 border-b pb-2">
                        {cat.name}
                      </h4>
                      <div className="d-flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <span key={skill} className="text-[12px] text-[#3a3832] bg-[#f9f8f6] border border-[#e5e1da] rounded px-2 py-1">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>

            {/* Certifications Grid Layout */}
            <div className="mb-16">
              <h3 className="font-mono text-[10px] tracking-widest uppercase text-[#928f85] mb-6">
                Certifications
              </h3>
              <Row className="g-4">
                {certifications.map((cert, index) => (
                  <Col key={index} md={6} lg={4}>
                    <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
                      <div className="interactive-card h-100 border border-[#e5e1da] rounded-xl p-4 bg-white shadow-sm d-flex flex-column">
                        <div className="cert-container border">
                          <Image 
                            src={cert.image} 
                            alt={cert.title} 
                            className="cert-image"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between align-items-start">
                            <h4 className="font-serif text-lg text-[#1a1814] mb-1">{cert.title}</h4>
                            <span className="text-[#928f85]" style={{ fontSize: '14px' }}>↗</span>
                          </div>
                          <p className="font-mono text-[9px] uppercase tracking-wider text-[#928f85] mb-2">
                            {cert.issuer}
                          </p>
                          <p className="text-[13px] text-[#5e5b54] mb-0 italic leading-snug">
                            {cert.detail}
                          </p>
                        </div>
                      </div>
                    </a>
                  </Col>
                ))}
              </Row>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;