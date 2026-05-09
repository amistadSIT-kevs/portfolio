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
      detail: "Comprehensive training on Artificial Intelligence fundamentals and applications within the ASEAN context.",
      link: "https://www.aiclassasean.org/profile?popup=0",
      image: aseanImg,
    },
    {
      title: "Introduction to Networking",
      issuer: "Cisco Networking Academy",
      detail: "Fundamental networking concepts and technologies.",
      link: "https://www.netacad.com/certificates/?issuanceId=225d8130-2070-4b60-a786-e8295aa54572",
      image: networkingImg,
    },
    {
      title: "EFSET English Certificate",
      issuer: "EF Standard English Test",
      detail: "Score: 76/100 — C2 Proficient",
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
            height: 140px;
            overflow: hidden;
            transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 8px;
          }
          
          .interactive-card:hover .cert-container {
            height: 320px; 
          }

          .cert-image {
            width: 100%;
            filter: grayscale(10%);
            transition: filter 0.3s ease, transform 0.5s ease;
            transform-origin: top;
          }

          .interactive-card:hover .cert-image {
            filter: grayscale(0%);
            transform: scale(1.02);
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

          .linkedin-hover:hover {
            background-color: #0077b5;
            border-color: #0077b5;
          }

          .github-hover:hover {
            background-color: #333;
            border-color: #333;
          }

          .cert-link {
            text-decoration: none;
            color: inherit;
          }
        `}
      </style>

      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            
            <div className="mb-6">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#928f85]">
                About Me
              </span>
              <h1 className="font-serif text-6xl text-[#1a1814] mt-2 mb-3">
                Kevin Amistad
              </h1>
              <h2 className="font-serif text-3xl italic text-[#5e5b54] opacity-80 mb-4">
                Aspiring Full-Stack Developer
              </h2>
              
              <div className="d-flex flex-wrap gap-2">
                {/* GitHub */}
                <a 
                  href="https://github.com/amistadSIT-kevs" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="contact-pill github-hover"
                >
                  <svg className="me-2" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/kevin-amistad-351085399/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="contact-pill linkedin-hover"
                >
                  <svg className="me-2" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            <hr className="border-[#e5e1da] mb-10" />

            <p className="text-[17px] text-[#5e5b54] leading-relaxed mb-12">
              A dedicated <em>BSIT student at the University of Baguio</em>, I am building my foundation
              in full-stack development with a focus on the <em>Java ecosystem</em> and modern JavaScript
              frameworks. I am driven by a passion for writing clean, purposeful code and creating software
              that is both functional and intuitive.
            </p>

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

            {/* Certifications Vertical List */}
            <div>
              <h3 className="font-mono text-[10px] tracking-widest uppercase text-[#928f85] mb-6">
                Certifications
              </h3>
              <div className="d-flex flex-column gap-4">
                {certifications.map((cert, index) => (
                  <a 
                    key={index}
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="cert-link"
                  >
                    <div className="interactive-card border border-[#e5e1da] rounded-xl p-4 bg-white shadow-sm">
                      <Row className="align-items-start g-4">
                        <Col xs={12} md={4}>
                          <div className="cert-container border">
                            <Image 
                              src={cert.image} 
                              alt={cert.title} 
                              className="cert-image"
                            />
                          </div>
                        </Col>
                        <Col xs={12} md={8}>
                          <div className="d-flex justify-content-between align-items-start h-100">
                            <div>
                              <h4 className="font-serif text-xl text-[#1a1814] mb-1">{cert.title}</h4>
                              <p className="font-mono text-[10px] uppercase tracking-wider text-[#928f85] mb-3">
                                {cert.issuer}
                              </p>
                              <p className="text-[14px] text-[#5e5b54] mb-0 italic leading-relaxed">
                                {cert.detail}
                              </p>
                            </div>
                            <div className="text-[#928f85] pt-1">
                              <span style={{ fontSize: '20px' }}>↗</span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </a>
                ))}
              </div>
              <p className="text-[11px] text-[#928f85] mt-6 text-center">
                (Hover certificates to expand view)
              </p>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;