import { Alert } from "bootstrap";
import React from "react";
import img2 from "../marwa.jpg";
import Bio from "./Bio";
import FullName from "./FullName";
import Profession from "./Profession";
import PropTypes from 'prop-types';


const Profile = ({handleName}) => {
  return (
    <div>
  <div className="card-container">
  
    <img className="round" src={img2} width="150px" alt="user" />
    <h3><FullName name="Marwa kilani" /></h3>
    
    <p> <Profession name="Développeur Fullstack JS" /></p>
    <p><Bio name="Développeur full stack JS,passionnée par la creation des sites web, Polyvalente, je maîtrise les différentes étapes techniques de la création d’un site ou d’une application web,de la compréhension des besoins utilisateurs, au développement frontend et backend." /></p>
  <button className="primary" onClick={(e)=>{handleName("Marwa kilani")}}>me</button>
    {/*<div className="buttons"
      <button className="primary">
        Message
      </button>
      <button className="primary ghost">
        Following
  </button>
    </di>*/}
    <div className="skills">
      <h6>Skills</h6>
      <ul>
        <li>Front End Development</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </div>
  </div>
  {/*<footer>
    <p>
      Created with <i className="fa fa-heart" /> by
      <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
      - Read how I created this
      <a target="_blank" href="https://florin-pop.com/blog/2019/04/profile-card-design">here</a>
      - Design made by
      <a target="_blank" href="https://dribbble.com/shots/6276930-Profile-Card-UI-Design">Ildiesign</a>
    </p>
  </footer>*/}
   
 
</div>

  );

}
Profile.defaultProps = {
  name:"name",
  Bio:"Bio",
  Profession:"Profession"
}
Profile.propTypes = {
 name: PropTypes.string,
 Bio: PropTypes.string,
 Profession: PropTypes.string,
 Children: PropTypes.string,
};

export default Profile;
