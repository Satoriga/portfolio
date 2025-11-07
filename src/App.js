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
            href="Currículum .pdf"
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
          <li>
            <a
              href="https://www.linkedin.com/in/samuel-artiga-674ba7387?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>

      <section id="about" className="section">
        <h2>Sobre mí</h2>
        <div className="about-card">
          <p>
            Me dedico a crear sitios web modernos, responsivos y fáciles de usar.
            Disfruto convertir ideas en proyectos digitales que se vean bien y
            funcionen de verdad. Me gusta cuidar cada detalle para que cada sitio
            refleje la esencia de quien está detrás y ofrezca una buena experiencia
            a quien lo visita.
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Proyectos</h2>
        <div className="card-container">
          <div className="project-card">
            <a
              href="https://www.figma.com/design/GjvyU9MWQTnpM9tuLuLrBR/Trip-Scout?m=auto&t=QbSPr7woyrISfgSO-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/tripocout.png" alt="TripScout" className="card-image" />
            </a>
            <h3>TRIP SCOUT</h3>
            <p>App que busca incentivar el turismo salvadoreño.</p>
          </div>

          <div className="project-card">
            <a
              href="https://github.com/Chris85234/becaSpot2.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/becaspot.png" alt="BecaSpot" className="card-image" />
            </a>
            <h3>BECASPOT</h3>
            <p>
              App que busca ayudar a los estudiantes a encontrar becas,
              pasantías y voluntariados.
            </p>
          </div>

          <div className="project-card">
            <a
              href="https://github.com/ArianaSaenz/FrontEnd-Yumfull.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/yummy.png" alt="Yumfull" className="card-image" />
            </a>
            <h3>YUMFULL</h3>
            <p>
              App que busca fomentar una dieta saludable con ingredientes
              básicos.
            </p>
          </div>

          <div className="project-card">
            <a
              href="https://superate2014-my.sharepoint.com/:f:/g/personal/samuel_torres2025_hilasal_superate_org_sv/Ek6259f1XQBHrINKoGq-o6IBuLED-F8i1deF3wfYmeR-0A?e=Tdg9Ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Canvart.png" alt="CanvArt" className="card-image" />
            </a>
            <h3>CanvArt</h3>
            <p>
              Voluntariado que ayuda a estudiantes de media a aprender sobre
              diseño en Canva.
            </p>
          </div>

          <div className="project-card">
            <img src="/superate.png" alt="No sé" className="card-image" />
            <h3>Futuro Proyecto</h3>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <h2>Educación</h2>
        <div className="card-container">
          <div className="project-card">
            <img src="/certs.png" alt="CERTS" className="card-image" />
            <h3>Bachillerato General</h3>
            <p>C.E.R.T.S</p>
            <h5>
              Formación básica que me permitió desarrollar habilidades como la
              empatía, el trabajo en equipo, entre muchas otras.
            </h5>
          </div>

          <div className="project-card">
            <img src="/superate.png" alt="Supérate Hilasal" className="card-image" />
            <h3>Programa Empresarial ¡Supérate!</h3>
            <h4>¡Supérate! Hilasal</h4>
            <h5>
              Inglés<br />
              Informática<br />
              Valores
            </h5>
          </div>

          <div className="project-card cert-card">
            <img src="/certifications.png" alt="Certificación" className="card-image" />
            <h3>Certificaciones</h3>
            <h4>Formación Complementaria</h4>
            <h5>
              Inglés<br />
              Informática<br />
              Excel
            </h5>
          </div>
        </div>
      </section>

      <footer>
        <p>®Eduardo Artiga. 2025 💖</p>
      </footer>
    </>
  );
}

export default App;
