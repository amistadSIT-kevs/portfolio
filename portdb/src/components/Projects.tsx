import Container from 'react-bootstrap/Container';

interface IProject {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
  repoLink: string;
  liveLink?: string;
  category: string;
}

const hardcodedProjects: IProject[] = [
  {
    _id: 'local-0',
    title: 'Unit 1 Lesson 1',
    description: 'My starting point in web development. I learned the core structure of the web using HTML and basic CSS styling.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/amistadsit-kevs/UNIT1_LESSON1_Amistad',
    liveLink: 'https://amistadsit-kevs.github.io/UNIT1_LESSON1_Amistad/',
    category: 'Lab Activity',
  },
  {
    _id: 'local-prelim',
    title: 'Prelim Lab Exam: Club Dashboard',
    description: 'My first big challenge. I moved beyond static pages to learn how React and backends handle real-world data.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    repoLink: 'https://github.com/amistadSIT-kevs/club-dashboard-lab',
    category: 'Examination',
  },
  {
    _id: 'local-1',
    title: 'MG Lab 5',
    description: 'A lab focused on practicing interactivity and making sure layouts work well on both mobile and desktop screens.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/amistadsit-kevs/MG_LAB5_Amistad',
    liveLink: 'https://amistadsit-kevs.github.io/MG_LAB5_Amistad/',
    category: 'Lab Activity',
  },
  {
    _id: 'local-6',
    title: 'MG Lab 6',
    description: 'Continued practice with Vanilla JavaScript to enhance UI design and make the interface more responsive.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/amistadsit-kevs/MG_Lab6_Amistad',
    liveLink: 'https://amistadsit-kevs.github.io/MG_Lab6_Amistad/',
    category: 'Lab Activity',
  },
  {
    _id: 'local-2',
    title: 'Midterm Lab Exam',
    description: 'A project focused on speed and design. I used Bootstrap to quickly build a professional-looking, organized layout.',
    techStack: ['React', 'Bootstrap', 'CSS'],
    repoLink: 'https://github.com/amistadsit-kevs/Midterm_Lab_Exam',
    liveLink: 'https://amistadsit-kevs.github.io/Midterm_Lab_Exam/',
    category: 'Examination',
  },
  {
    _id: 'local-4',
    title: 'FG Lab 2',
    description: 'Exploration of specialized web components and layouts to make the site feel modern and user-friendly.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/amistadsit-kevs/FG_LAB2_AMISTAD',
    liveLink: 'https://amistadsit-kevs.github.io/FG_LAB2_AMISTAD/',
    category: 'Lab Activity',
  },
  {
    _id: 'local-5',
    title: 'FG Lab 3',
    description: 'Focusing on the details by adding interactive elements and refined styling to improve the user experience.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/amistadsit-kevs/FG_LAB3_AMISTAD',
    liveLink: 'https://amistadsit-kevs.github.io/FG_LAB3_AMISTAD/',
    category: 'Lab Activity',
  },
  {
    _id: 'local-3',
    title: 'FG Lab 4',
    description: 'My introduction to TypeScript. It taught me how to write stricter, more reliable code for React components.',
    techStack: ['React', 'TypeScript', 'CSS'],
    repoLink: 'https://github.com/amistadsit-kevs/FG_LAB4_Amistad',
    liveLink: 'https://amistadsit-kevs.github.io/FG_LAB4_Amistad/',
    category: 'Lab Activity',
  },
  {
    _id: 'local-f1',
    title: 'Finals Lab 1',
    description: 'Combining everything I learned from the semester to implement fundamental concepts into a single project.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/amistadsit-kevs/Finals_Lab1_Amistad',
    liveLink: 'https://amistadsit-kevs.github.io/Finals_Lab1_Amistad/',
    category: 'Lab Activity',
  },
  {
    _id: 'local-community',
    title: 'Community Event',
    description: 'A focused project on displaying local data clearly. I practiced designing a UI that helps users find info quickly.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/amistadsit-kevs/CommunityEvent',
    liveLink: 'https://amistadsit-kevs.github.io/CommunityEvent/',
    category: 'Lab Activity',
  },
  {
    _id: 'local-final-exam',
    title: 'Final Lab Exam: Portfolio App',
    description: 'The "hub" for my work. This project reflects my growth from simple HTML to building full React applications.',
    techStack: ['React', 'TypeScript', 'Bootstrap'],
    repoLink: 'https://github.com/amistadsit-kevs/portfolio-app',
    liveLink: 'https://amistadsit-kevs.github.io/portfolio-app/',
    category: 'Examination',
  },
];

const Projects = () => {
  return (
    <Container className="py-5">
      <style>
        {`
          .project-card {
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
          }
          
          .project-card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: 0 12px 24px rgba(0,0,0,0.15) !important;
            border-color: #000 !important;
          }
        `}
      </style>

      <div className="mb-5">
        <p className="text-uppercase text-secondary mb-1" style={{ fontSize: 11, letterSpacing: '0.12em' }}>
          Portfolio
        </p>
        <h2 className="fw-normal mb-2" style={{ fontFamily: 'Georgia, serif', fontSize: 32 }}>
          Academic Projects
        </h2>
        <p className="text-secondary" style={{ fontSize: 14, lineHeight: 1.7 }}>
          A collection of projects and activities built throughout my first year at the University of Baguio.
        </p>
      </div>

      <div className="row g-4">
        {hardcodedProjects.map((p) => (
          <div key={p._id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border shadow-none rounded-3 project-card">
              <div className="card-body d-flex flex-column p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="card-title fw-medium mb-0" style={{ fontSize: 16 }}>
                    {p.title}
                  </h5>
                  <span className="badge bg-light text-secondary border ms-2 flex-shrink-0" style={{ fontSize: 11 }}>
                    {p.category}
                  </span>
                </div>

                <p className="card-text text-secondary small mb-3" style={{ lineHeight: 1.7, flexGrow: 1 }}>
                  {p.description}
                </p>

                <div className="d-flex flex-wrap gap-1 mb-4">
                  {p.techStack.map((tech) => (
                    <span key={tech} className="badge bg-light text-secondary border" style={{ fontSize: 11 }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="d-flex gap-2 mt-auto">
                  <a href={p.repoLink} target="_blank" rel="noreferrer" className="btn btn-outline-secondary btn-sm flex-fill">
                    Source Code
                  </a>
                  {p.liveLink && (
                    <a href={p.liveLink} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm flex-fill">
                      View Live →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-5 text-center">
        <div className="d-inline-block p-2 px-4 rounded-pill border bg-light">
           <p className="text-secondary mb-0" style={{ fontSize: 13, letterSpacing: '0.02em' }}>
            <span className="me-2"></span>
            All semester activities have been successfully documented.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Projects;