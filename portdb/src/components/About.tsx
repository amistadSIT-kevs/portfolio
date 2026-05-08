import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  const categories = [
    { name: "Frontend", skills: ["React.js", "TypeScript"] },
    { name: "Backend", skills: ["Java"] },
    { name: "Database", skills: ["MongoDB", "MySQL"] },
  ];

  return (
    <section className="py-16 bg-[#faf9f6]">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            
            <div className="mb-10">
              <h1 className="font-serif text-5xl italic text-[#1a1814]">
                Aspiring Full-Stack Developer
              </h1>
            </div>

            <hr className="border-[#e5e1da] mb-10" />

            <p className="text-[17px] text-[#5e5b54] leading-relaxed mb-12">
              A first-year <em>BSIT student at the University of Baguio</em>, I'm building my foundation
              in full-stack development with a focus on the <em>Java ecosystem</em> and modern JavaScript
              frameworks — driven by a passion for writing clean, purposeful code and creating software
              that's both functional and intuitive.
            </p>

            <Row className="g-4">
              {categories.map((cat) => (
                <Col key={cat.name} md={4}>
                  <div className="h-100 border border-[#e5e1da] rounded-xl p-5 bg-white shadow-sm transition-all hover:border-[#cdc9c1]">
                    <h3 className="font-mono text-[9px] tracking-widest uppercase text-[#928f85] mb-4 border-b pb-2">
                      {cat.name}
                    </h3>
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

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;