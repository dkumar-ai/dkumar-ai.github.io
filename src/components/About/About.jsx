
import './About.css'

const About = () => {
  const skills = [
    { icon: 'bx bxl-python', label: 'Python' },
    { icon: 'bx bx-brain', label: 'Machine Learning' },
    { icon: 'bx bx-network-chart', label: 'Deep Learning' },
    { icon: 'bx bx-bot', label: 'Generative AI' },
    { icon: 'bx bx-git-branch', label: 'Multi-Agent Systems' },
    { icon: 'bx bx-search-alt', label: 'RAG Pipelines' },
    { icon: 'bx bx-message-square-detail', label: 'Prompt Engineering' },
    { icon: 'bx bx-check-shield', label: 'LLM Evaluation' },
    { icon: 'bx bxs-data', label: 'Pinecone' },
    { icon: 'bx bxs-data', label: 'Qdrant' },
    { icon: 'bx bx-code-alt', label: 'FastAPI' },
    { icon: 'bx bx-server', label: 'Flask & REST APIs' },
    { icon: 'bx bxl-tensorflow', label: 'TensorFlow' },
    { icon: 'bx bx-brain', label: 'PyTorch' },
    { icon: 'bx bx-bar-chart-alt-2', label: 'Scikit-learn' },
    { icon: 'bx bx-image', label: 'Computer Vision' },
    { icon: 'bx bx-data', label: 'SQL' },
    { icon: 'bx bxl-docker', label: 'Docker' },
    { icon: 'bx bxl-git', label: 'Git' },
    { icon: 'bx bxl-github', label: 'GitHub' },
    { icon: 'bx bxl-google-cloud', label: 'Google Cloud' },
    { icon: 'bx bx-cloud', label: 'AWS & Azure' },
  ]

  const stats = [
    { number: '12', label: 'Projects Listed' },
    { number: '92%', label: 'Plant Disease Model Accuracy' },
    { number: '2', label: 'Interview Engine Modules' },
    { number: '2026', label: 'Graduation Year' },
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>

        <div className="about-grid">
          {/* Left — Bio */}
          <div className="about-bio">
            <p className="about-tag">// who I am</p>

            <h3 className="about-heading">
              Building reliable
              <br />
              <span>intelligent systems</span>
            </h3>

            <p className="about-text">
              I'm an AI Engineer and Computer Science graduate from
              Chandigarh University, specializing in Artificial Intelligence
              and Machine Learning. My work focuses on building agentic
              LLM systems, retrieval-augmented generation (RAG) pipelines,
              evaluation tools, and backend services that turn AI capabilities
              into practical applications.
            </p>

            <p className="about-text">
              As an AI Developer Intern at ATGWorld Networks — Vidya AI,
              I've worked on an AI-powered interview evaluation service,
              structured LLM outputs, Pinecone integration, and modular
              AI content-generation pipelines. My projects also span
              adaptive interview intelligence with ProbeX_AI, multi-agent
              orchestration, prompt evaluation, computer vision, and IoT
              automation.
            </p>

            <p className="about-text">
              I focus on more than model performance: I care about reliable
              outputs, grounded evidence, deterministic validation, and
              systems that can be tested, maintained, and improved.
            </p>

            <div className="about-stats">
              {stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Skills */}
          <div className="about-skills">
            <p className="about-tag">// what I work with</p>

            <h3 className="about-heading">
              Tech <span>Stack</span>
            </h3>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill.label}>
                  <i className={skill.icon} aria-hidden="true"></i>
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

