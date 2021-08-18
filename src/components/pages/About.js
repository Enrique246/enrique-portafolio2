import React from "react";
import "../../styles/About.css";

export default function About(props) {
  return (
    <div>
      <h1 className="m-4">About Me</h1>
      <p className="m-4">
        Full-stack web developer recently certified by Tec de Monterrey, web and
        app design oriented with a 7 year administrative career that includes a
        masters and bachelor's degree in the same field. Freelance digital
        marketer strategist and administrative manager at the health industry.
        Problem solving and decision taking key skills to fulfill personal and
        professional goals. Teamplayer, bringing a constant positive attitude
        and a strong work ethic, focused on planning and delivering results.
        Successfully finding innovative ways to make designs come to life.
      </p>
<br></br>
      <div className="row p-5">
        <h2 className="m-4">Enrique Del Castillo Chávez </h2>
        <img
          className="col-sm-1"
          src="images/Screen Shot 2021-03-10 at 23.59.04.png"
          id="photo"
          alt="..."
        />
        <div className="col-md pt-5 text-primary">
          <p>
            <i className="fab fa-react fa-7x" width="10" height="20"></i>
          </p>
          <h5 className="card-title m-4 text-secondary"> React</h5>
        </div>
         {/* Logo 2 */}
        <div className="col-md pt-5 text-primary">
          <p>
            <i className="fab fa-node fa-7x" width="10" height="20"></i>
          </p>
          <h5 className="card-title m-3 text-secondary"> NodeJS</h5>
        </div>
        {/* Logo 3 */}
        <div className="col-md pt-5 text-primary">
          <p>
            <i className="fas fa-server fa-7x" width="10" height="20"></i>
          </p>
          <h5 className="card-title m-2 text-secondary"> Express</h5>
        </div>
        {/* Logo 4 */}
        <div className="col-md pt-5 text-primary">
          <p>
            <i className="fab fa-js-square fa-7x" width="10" height="20"></i>
          </p>
          <h5 className="card-title m-2 text-secondary"> JavaScript</h5>
        </div>
        {/* Logo 5 */}
        <div className="col-md pt-5 text-primary">
          <p>
            <i className="fas fa-database fa-7x" width="10" height="20"></i>
          </p>
          <h5 className="card-title m-4 text-secondary"> SQL</h5>
        </div>
      </div>
      <footer className="bg-black footer justify-content-center">
        <div className="container text-center">
      <a href="https://github.com/Enrique246" style = {{textDecoration:"none", color:"white"}} target="_blank" rel="noopener noreferrer"><span
										className="fab fa-github m-2 fa-3x"><i className="sr-only">Github</i></span></a> 
                                       
								<a href="https://www.linkedin.com/in/edelcastillo/" target="_blank" rel="noopener noreferrer"><span
										className="fab fa-linkedin m-2 fa-3x"><i className="sr-only">Linkedin</i></span></a> 
      </div>
      </footer>

      
    </div>
    
  );
}
