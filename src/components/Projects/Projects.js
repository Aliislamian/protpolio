import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/4fivr.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/3fiver.png";
import chatify from "../../Assets/Projects/linkable.png";
import suicide from "../../Assets/Projects/arzna.png";
import bitsOfCode from "../../Assets/Projects/1fivr.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Linkable"
              description="This project showcases my skills in web development, front-end design, and implementing user authentication and payment systems."
              ghLink="https://github.com/Aliislamian/linkblefrontend.git"
              demoLink="https://64901bf53b6450416dec690f--admirable-frangipane-55ff65.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Spatay"
              description="I have successfully developed a comprehensive booking website that allows users to easily book flights and hostels, simplifying their travel planning process."
              ghLink=""
              demoLink="https://spatay.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Scarlet"
              description="I have successfully designed and developed a professional construction company website that showcases our services, projects, and expertise, providing a user-friendly platform for potential clients to explore and connect with us."
              ghLink="https://github.com/Aliislamian/scarlet_backend.git"
              demoLink="http://scarletconstruction.ca/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Otawix"
              description="I have successfully developed a comprehensive booking website that allows users to easily book flights and hostels, simplifying their travel planning process."
              ghLink=""
              demoLink="https://b2c.otawix.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Arzan"
              description="I have successfully developed a comprehensive booking website that allows users to easily book flights and hostels, simplifying their travel planning process."
              ghLink=""
              demoLink="https://arzanair.com/" 
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
