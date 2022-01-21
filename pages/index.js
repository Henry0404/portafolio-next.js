import Link from "next/link";
import Layout from "../components/layout";
import { skill, experience, projects } from "../profile";
console.log(experience);
const index = () => (
  //Headeer card
  <>
    <Layout>
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img src="/bar-simpson.png" alt="" />
              </div>
              <div className="col-md-8">
                <h1>Henry Romero</h1>
                <h3>FullStack</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <a href="/hireme"> hire me</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* second section */}
      <div className="row py-2">
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Skill</h1>
              {skill.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-light">
            <div className="card-body">
              <h1>experience</h1>
              <ul>
                {experience.map(({ title, from, to, description }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from}-{to}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
              <Link href="/experience">
                <a btn btn-ligth>
                  Conoce Mas
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* portafolio */}

      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">Portafolio</h1>
              </div>
              {projects.map(({ name, description, imagen }, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={`/${imagen}`} alt="" className="card-img-top" />
                    </div>

                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#!"> Conoce Mas</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link href="/portafolio">
                <a className="btn btn-outline-light">Mas Proyectos</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
);
export default index;
