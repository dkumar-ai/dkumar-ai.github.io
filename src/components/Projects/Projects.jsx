
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Brok — Deterministic AI Architecture Reviewer',
      desc: 'Deterministic architecture review engine using a 53-entry cited capacity knowledge base and Little’s Law. Includes latency and cost analysis, a five-rule anti-pattern linter, and abstention when designs exceed the supported model.',
      tags: ['Python', 'MCP', 'Little’s Law', 'System Design', 'Benchmarking'],
      year: '2026',
      github: 'https://github.com/dkumar-ai/brok',
      color: '#245b73',
    },
    {
      id: 2,
      title: 'CacheGuard — Semantic Cache Safety',
      desc: 'Semantic-cache safety benchmark using QQP, measuring a 10.5% incorrect-answer rate at a similarity threshold of 0.80. Includes a LiteLLM hook, OpenTelemetry tracing, and a local judge to validate cache hits.',
      tags: ['Python', 'LiteLLM', 'OpenTelemetry', 'QQP', 'LLM Evaluation'],
      year: '2026',
      github: 'https://github.com/dkumar-ai/cacheguard',
      color: '#594078',
    },
    {
      id: 3,
      title: 'OptiQuant — Explainable ML Trading',
      desc: 'Machine learning trading system with OHLCV ingestion, price and volatility features, and a LightGBM, CatBoost, and Random Forest ensemble. Uses SHAP explanations and backtesting to evaluate trading signals.',
      tags: ['Python', 'LightGBM', 'CatBoost', 'Random Forest', 'SHAP', 'Docker'],
      year: '2026',
      github: 'https://github.com/dkumar-ai/OptiQuant',
      color: '#17644d',
    },
    {
      id: 4,
      title: 'diffprompt — LLM Prompt Evaluation CLI',
      desc: 'Command-line tool for comparing LLM outputs across prompt variations using deterministic inference, line-level similarity scoring, and readable terminal diffs. Designed to support repeatable prompt evaluation and regression testing.',
      tags: ['Python', 'Groq API', 'difflib', 'Click', 'Rich'],
      year: '2024',
      github: 'https://github.com/dkumar-ai/diffprompt-v2',
      color: '#3a2a5a',
    },
    {
      id: 5,
      title: 'Cascade AI — Multi-Agent Orchestration',
      desc: 'Multi-agent system routing requests to specialized agents through intent classification. Includes fallback handling, Firestore-backed persistent conversation memory, and output formatting for Slack, PDF, and email.',
      tags: ['Python', 'Groq API', 'Firestore', 'Multi-Agent AI'],
      year: '2024',
      github: 'https://github.com/dkumar-ai/cascade-ai',
      color: '#1a4a3a',
    },
    {
      id: 6,
      title: 'GAIA Benchmark Agent',
      desc: 'Autonomous reasoning agent that achieved 60% accuracy on the GAIA benchmark through dynamic tool selection for web search, Python execution, and calculator operations.',
      tags: ['Python', 'smolagents', 'LiteLLM', 'Groq', 'DuckDuckGo'],
      year: '2024',
      github: 'https://github.com/dkumar-ai/gaia-agent',
      color: '#4a3a1a',
    },
    {
      id: 7,
      title: 'Research Paper Tutor — RAG Learning Assistant',
      desc: 'Retrieval-augmented generation pipeline for conversational research-paper analysis. Uses document parsing, semantic embeddings, Qdrant vector search, and persistent learner knowledge-gap tracking to adapt explanations across sessions.',
      tags: ['Python', 'Docling', 'Sentence Transformers', 'Qdrant', 'Groq', 'RAG'],
      year: '2024',
      github: 'https://github.com/dkumar-ai/vlm-paper-tutor',
      color: '#2a1a4a',
    },
    {
      id: 8,
      title: 'Clustify — Document Clustering',
      desc: 'End-to-end NLP pipeline that preprocesses raw text, generates TF-IDF features, and groups documents using K-Means. Uses elbow-method analysis and PCA to select cluster counts, reduce dimensionality, and visualize semantic groupings.',
      tags: ['Python', 'NLTK', 'TF-IDF', 'K-Means', 'PCA', 'Matplotlib'],
      year: '2024',
      github: '',
      color: '#69442c',
    },
    {
      id: 9,
      title: 'Smart Gardening Assistant',
      desc: 'IoT-based smart irrigation system combining ESP32 sensor readings and live weather data. CNN trained on 50K+ PlantVillage images achieved 92% reported accuracy across 38 plant disease classes; automated irrigation reduced water consumption by 35%.',
      tags: ['IoT', 'ESP32', 'CNN', 'TensorFlow', 'OpenCV', 'Home Assistant'],
      year: '2024',
      github: '',
      color: '#2d5a27',
    },
    {
      id: 10,
      title: 'Heart Failure Prediction Using ANN',
      desc: 'Clinical prediction model using a five-layer artificial neural network with Batch Normalization, Dropout, and hyperparameter tuning. Reported 87% accuracy and 0.91 ROC-AUC on a 299-patient dataset.',
      tags: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'ANN'],
      year: '2024',
      github: '',
      color: '#5a1a1a',
    },
    {
      id: 11,
      title: 'Medical Image Feature Extraction',
      desc: 'ResNet-18 transfer-learning pipeline for classification across PET, CT, and X-ray images. Reported 89% accuracy and a 0.87 F1-score, with image augmentation and post-training quantization for improved efficiency.',
      tags: ['Python', 'ResNet-18', 'PyTorch', 'Transfer Learning', 'Computer Vision'],
      year: '2023',
      github: '',
      color: '#1a3a5a',
    },
    {
    id: 12,
    title: 'ProbeX_AI — Adaptive Interview Engine',
    desc: 'Built a modular AI-powered mock interview and evaluation pipeline with an adaptive Conductor for follow-up questions and a Scorer for transcript-grounded candidate assessment. Combines ICP-aware branching, difficulty adaptation, multi-axis scoring, hiring-gap computation, and deterministic quote-lock and schema validation.',
    tags: [
      'Python',
      'Groq API',
      'LLM Engineering',
      'Prompt Engineering',
      'Adaptive Interviews',
      'JSON Validation',
      'Evaluation'
    ],
    year: '2026',
    github: 'https://github.com/dkumar-ai/Interview_Engine',
    color: '#174a72',
  },
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">// things I've built</p>
        <div className="section-divider"></div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div
                className="project-thumbnail"
                style={{
                  background: `linear-gradient(135deg, ${project.color}, #0a0a0a)`,
                }}
              >
                <span className="project-year">{project.year}</span>

                <div className="project-placeholder-icon">
                  <i className="bx bx-code-block"></i>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <i className="bx bxl-github"></i>
                    <span>
                      {project.id === 9 ? 'Repository' : 'GitHub'}
                    </span>
                  </a>
                </div>
              </div>

              <div className="project-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
