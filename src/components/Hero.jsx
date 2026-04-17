export default function Hero() {
  return (
    <section id="sobre" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Olá, eu sou</p>
          <h1 className="hero-name">Kelvis Rios</h1>
          <h2 className="hero-role">Desenvolvedor em Formação</h2>
          <p className="hero-bio">
            Estudante de <strong>Sistemas para Internet</strong>, com conhecimentos em
            HTML, CSS, JavaScript e SQL. Gosto de lógica de programação e computadores,
            e aprendo na prática criando soluções simples e úteis. Busco evoluir
            constantemente e desenvolver projetos que gerem valor real para as pessoas.
          </p>
          <div className="hero-actions">
            <a href="#projetos" className="btn btn-primary">
              Ver Projetos
            </a>
            <a href="#contato" className="btn btn-outline">
              Contato
            </a>
          </div>
        </div>
        <div className="hero-avatar">
          <div className="avatar-ring">
            <img
              src="https://lkr0707.github.io/meu_portifolio/perfil.jpg"
              alt="Kelvis Rios"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<div class="avatar-fallback">KR</div>';
              }}
            />
          </div>
        </div>
      </div>

      <div className="skills-bar">
        {["HTML5", "CSS3", "JavaScript", "SQL", "Git", "React"].map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
