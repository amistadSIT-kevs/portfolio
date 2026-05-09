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
      isPortrait: false, // Landscape
    },
    {
      title: "Introduction to Networking",
      issuer: "Cisco Networking Academy",
      detail: "Fundamental networking concepts and technologies.",
      link: "https://www.netacad.com/certificates/?issuanceId=225d8130-2070-4b60-a786-e8295aa54572",
      image: networkingImg,
      isPortrait: false, // Landscape
    },
    {
      title: "EFSET English Certificate",
      issuer: "EF Standard English Test",
      detail: "Score: 76/100 — C2 Proficient (Advanced English).",
      link: "https://cert.efset.org/3QPXi5",
      image: efsetImg,
      isPortrait: true, // Portrait
    }
  ];

  return (
    <section className="py-16 bg-[#faf9f6]">
      <style>
        {`
          .interactive-card {
            transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
            background: white;
          }
          
          .interactive-card:hover {
            border-color: #cdc9c1 !important;
            box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
          }

          /* Fixed the spacing issues for ASEAN/NetAcad */
          .cert-expand-container {
            width: 100%;
            overflow: hidden;
            border-radius: 6px;
            border: 1px solid #e5e1da;
            transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            margin-bottom: 20px;
            background: #fff;
          }

          .frame-landscape { height: 160px; }
          .interactive-card:hover .frame-landscape { height: 420px; }

          .frame-portrait { height: 200px; }
          .interactive-card:hover .frame-portrait { height: 600px; }

          .cert-img-full {
            width: 100%;
            height: auto;
            display: block;
            filter: grayscale(15%);
            transition: filter 0.4s ease;
          }

          .interactive-card:hover .cert-img-full {
            filter: grayscale(0%);
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
          }
        `}
      </style>

      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            
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

            <hr className="border-[#e5e1da] mb-10" />

            <p className="text-[17px] text-[#5e5b54] leading-relaxed mb-12">
              A dedicated <em>BSIT student at the University of Baguio</em>, I am building my foundation
              in full-stack development with a focus on the <em>Java ecosystem</em> and modern JavaScript
              frameworks. I am driven by a passion for writing clean, purposeful code and creating software
              that is both functional and intuitive.
            </p>

            <div className="mb-16">
              <h3 className="font-mono text-[10px] tracking-widest uppercase text-[#928f85] mb-6">
                Technical Stack
              </h3>
              <Row className="g-4">
                {categories.map((cat) => (
                  <Col key={cat.name} md={4}>
                    <div className="interactive-card h-100 border border-[#e5e1da] rounded-xl p-5 shadow-sm">
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

            <div>
              <h3 className="font-mono text-[10px] tracking-widest uppercase text-[#928f85] mb-6">
                Certifications
              </h3>
              <div className="d-flex flex-column gap-4">
                {certifications.map((cert, index) => (
                  <a key={index} href={cert.link} target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div className="interactive-card border border-[#e5e1da] rounded-xl p-4 shadow-sm">
                      
                      <div className={`cert-expand-container ${cert.isPortrait ? 'frame-portrait' : 'frame-landscape'}`}>
                        <Image src={cert.image} alt={cert.title} className="cert-img-full" />
                      </div>

                      <div className="d-flex justify-content-between align-items-end">
                        <div>
                          <h4 className="font-serif text-xl text-[#1a1814] mb-1">{cert.title}</h4>
                          <p className="font-mono text-[10px] uppercase tracking-widest text-[#928f85] mb-2">{cert.issuer}</p>
                          <p className="text-[14px] text-[#5e5b54] mb-0 italic leading-relaxed">
                            {cert.detail}
                          </p>
                        </div>
                        <div className="text-[#928f85] font-serif flex-shrink-0 ms-3">View Full ↗</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;