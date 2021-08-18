// Sinppet "rafce" to create functional component template
import React from "react";

export default function Portafolio(props) {
  return (
    <div>
      <div className="row p-3" style={{backgroundColor: "whitesmoke"}} >
        <h1 className="m-2" style={{color: "blue"}}>Portafolio</h1>
         {/* Box 1 */}
         <div className="card col-sm-5 mx-5 border-5 border-primary">
          <img src="/images/Screen Shot 2021-04-29 at 21.14.23.png" className="card-img-top pt-2" alt="Ecommerce-project"/>
          <div className="card-body">
            <h5 className="card-title">My Book Cloud</h5>
            <p className="card-text">An app that promotes reading by giving search results from Google books API. As well as giving the user the option of searching their favorite authors books in the New York Times API.</p>
          </div>
          <div className="card-footer m-2">
            <small className="text-muted" >
            {/* <a href="https://github.com/Enrique246/MyBookCloud" target="blank_">GitHub</a> */}
            <a href="https://github.com/Enrique246/MyBookCloud"  target="_blank" rel="noopener noreferrer"><span className="fab fa-github fa-2x" style = {{color:"black"}}><i className="sr-only">Github</i></span></a> &nbsp;&nbsp;
            <a href="https://enrique246.github.io/MyBookCloud/" style = {{textDecoration:"none"}}target="blank_">Link to App</a></small>
          </div>
        </div>

        {/* Box 2 */}
        <div className="card col-sm-5 mx-5 border-5 border-primary">
          <img src="images/Ecommerce backend project.png" className="card-img-top pt-2" alt="Ecommerce-project"/>
          <div className="card-body">
            <h5 className="card-title">E-commerce Backend Project</h5>
            <p className="card-text">Management of product data for e-commerce site.</p>
          </div>
          <div className="card-footer m-2">
            <small className="text-muted"><a href="https://github.com/Enrique246/e-commerce-backend"  target="_blank" rel="noopener noreferrer"><span className="fab fa-github fa-2x" style = {{color:"black"}}><i className="sr-only">Github</i></span></a>&nbsp;&nbsp;&nbsp;<a href="https://drive.google.com/file/d/1v506MqKIUo5dyyOMOWTmC0KyCDeoTIHf/preview" target="blank_">Video 1</a> &nbsp;&nbsp;&nbsp;<a href="https://drive.google.com/file/d/1lCwlO7fEFy4LYcJ92dZJ2NojJS2ULTuO/preview" target="blank_">Video 2</a> </small>
          </div>
        </div>
         {/* Box 3 */}
         <div className="card col-sm-5 mx-5 mt-5 border-5 border-primary">
          <img src="images/Screen Shot 2021-07-06 at 13.51.51.png" className="card-img-top pt-3" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Employee Management System</h5>
            <p className="card-text">Back-end app that helps managers add, remove and modify employees.</p>
          </div>
          <div className="card-footer m-2">
            <small className="text-muted">
            <a href="https://github.com/Enrique246/employee-management"  target="_blank" rel="noopener noreferrer"><span className="fab fa-github fa-2x" style = {{color:"black"}}><i className="sr-only">Github</i></span></a> &nbsp;&nbsp;&nbsp;<a href="https://drive.google.com/file/d/1csM8bVv5LATYuYcgW0sA0DeTs_TUIkbv/view" target="blank_">Watch Video</a></small>
          </div>
        </div>

        {/* Box 4 */}
        <div className="card col-sm-5 mx-5 mt-5 border-5 border-primary">
          <img src="images/home-GIF.gif" className="card-img-top pt-3" alt="Yoga-Studio-gif"/>
          <div className="card-body">
            <h5 className="card-title">Yoga Sudio</h5>
            <p className="card-text">An easy and accesible application for searching and reserving yoga classes.</p>
          </div>
          <div className="card-footer m-2">
            <small className="text-muted">
            <a href="https://github.com/Enrique246/yoga-project"  target="_blank" rel="noopener noreferrer"><span className="fab fa-github fa-2x" style = {{color:"black"}}><i className="sr-only">Github</i></span></a>&nbsp;&nbsp;&nbsp;
              <a href="https://damp-dawn-28515.herokuapp.com" target="blank_">Link to App</a></small>
          </div>
        </div>

      </div>
    </div>
  );
}
