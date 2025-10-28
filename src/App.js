import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="hero">
          <img src="/1000036389.png" alt="Foto de Sam" className="avatar" />
          <h2>¡Hola! Soy Eduardo Artiga</h2>
          <p>SALES MANAGER</p>

          <a
            href="/Currículum Marketing 2.4.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Ver mi currículum 🦑
          </a>
        </div>
      </header>

      <nav>
        <ul>
          <li><a href="#about">About me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="https://www.linkedin.com/in/samuel-artiga-674ba7387?utm_source=share_via&utm_content=profile&utm_medium=member_ios">LinkedIn</a></li>
        </ul>
      </nav>

      <section id="about" className="section">
        <h2>Sobre mí</h2>
        <p>
          Me dedico a crear sitios web modernos, responsivos y fáciles de usar.
Disfruto convertir ideas en proyectos digitales que se vean bien y funcionen de verdad.
Me gusta cuidar cada detalle para que cada sitio refleje la esencia de quien está detrás y ofrezca una buena experiencia a quien lo visita.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Proyectos</h2>
        <div className="card-container">
          <a href="https://ejemplo-tripscout.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="project-card">
              <h3>TRIP SCOUT</h3>
              <p>App que busca incentivar el turismo salvadoreño.</p>
            </div>
          </a>

          <a href="https://github.com/Chris85234/becaSpot2.git" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="project-card">
              <h3>BECASPOT</h3>
              <p>App que busca ayudar a los estudiantes a encontrar becas, pasantías y voluntariados.</p>
            </div>
          </a>

          <a href="https://github.com/ArianaSaenz/FrontEnd-Yumfull.git" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="project-card">
              <h3>YUMFULL</h3>
              <p>App que busca fomentar una dieta saludable con ingredientes básicos.</p>
            </div>
          </a>

          <a href="https://ejemplo-canvart.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="project-card">
              <h3>CanvArt</h3>
              <p>Voluntariado que ayuda a estudiantes de media a aprender sobre diseño en Canva.</p>
            </div>
          </a>

          <a href="https://ejemplo-nose.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="project-card">
              <h3>No sé</h3>
              <p>App sobre turismo</p>
            </div>
          </a>

          <div className="project-card">
            <h3>No sé</h3>
            <p>App sobre turismo</p>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <h2>Educación</h2>
        <div className="card-container">
          <div className="project-card">
            <h3>Bachillerato General</h3>
            <p>C.E.R.T.S</p>
            <h5>Formación básica que me permitió desarrollar muchas hablilidades como lo son la empatía, el trabajo en equipom entre muchas otras.</h5>
          </div>

          <div className="project-card">
            <h3>Programa Empresarial ¡Supérate!</h3>
            <h4>¡Supérate! Hilasal</h4> 
            <h5>
              Inglés<br />
              Informática<br />
              Valores
            </h5>
          </div>
        </div>
      </section>

      <footer>
        <p>Eduardo Artiga. Un devorador tremendo 💖🫦💖</p>
      </footer>
    </>
  );
}

export default App;
