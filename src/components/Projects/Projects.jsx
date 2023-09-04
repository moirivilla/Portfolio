
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="orange">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I´ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BateríaJS"
              description="The game should display various buttons visually associated with a battery.
Pressing each of the buttons will play a sound associated with it from the sound files.
Each button must also have an associated keyboard key that would have the same effect as pressing it.
A delay of a few milliseconds can be added to each sound to make it more realistic."
              ghLink="https://github.com/moirivilla/BateriaJS"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portal Digital"
              description="Second project for HACK A BOSS - 2023: API that allows managing a website where people who need a digital service can ask other users for help. For example: translate a text, edit a photo, review a document, etc. Only needs that can be made through a digital file."
              ghLink="https://github.com/moirivilla/portal-digital"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SkillVerse"
description="Final project for HACK A BOSS - 2023: Web where people who need a digital service can ask other users for help. For example: translate a text, edit a photo, review a document, etc. Only needs that can be made through a digital file."
              ghLink="https://github.com/moirivilla/SkillVerse"
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Calculator"
              description="This app combines the power of Node.js on the backend and the flexibility of React on the frontend to give you a fast and accurate computing experience. Perform fundamental math operations like addition, subtraction, multiplication, and division with ease. This calculator is built on a robust backend architecture that processes your calculation requests and provides you with the results in real time."
              ghLink="https://github.com/moirivilla"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="UNDER CONSTRUCTION"
              description="UNDER CONSTRUCTION"
              ghLink="https://github.com/moirivilla"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="UNDER CONSTRUCTION"
              description="UNDER CONSTRUCTION"
              ghLink="https://github.com/moirivilla"
            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;