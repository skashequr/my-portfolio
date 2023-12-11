import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";


import testy from "../../Assets/Projects/mockups.jpg";
import hotle from "../../Assets/Projects/Screenshot 2023-12-11 212433.png";
import entertainment from "../../Assets/Projects/Screenshot 2023-12-11 213131.png";
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
              imgPath={testy}
              isBlog={false}
              title="Tasty App"
              description="The Tasty App is a collaborative project developed by five participants as part of a project course. The objective was to create a user-friendly web application that allows users to search for recipes based on various criteria. The app was developed using React, CSS, and a REST API, and it offers a range of features to facilitate the exploration and preparation of dishes. The Tasty App is responsive and can be used on desktop and mobile devices. It is available in English."
              ghLink="https://github.com/skashequr/Frontend_Abschlussprojekt_Tasty"
              demoLink="https://delightful-cheesecake-9b19f0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotle}
              isBlog={false}
              title="Bits-0f-C0de"
              description="The Sk Hotle is a collaborative project developed by five participants as part of a project course. The objective was to create a user-friendly web application that allows users to search for recipes based on various criteria. The app was developed using React, CSS, and a REST API, and it offers a range of features to facilitate the exploration and preparation of dishes. The Tasty App is responsive and can be used on desktop and mobile devices. It is available in English."
              ghLink="https://github.com/skashequr/Sk-Hotle-Fontend"
              demoLink="https://hottle-service.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={entertainment}
              isBlog={false}
              title="Entatetment"
              description="The My Entatetment Preoject is a collaborative project developed by five participants as part of a project course. The objective was to create a user-friendly web application that allows users to search for recipes based on various criteria. The app was developed using React, CSS, and a REST API,mongoDb and it offers a range of features to facilitate the exploration and preparation of dishes."
              ghLink="https://github.com/skashequr/MY-ENTERTAINMENT-FONTEND"
              demoLink="https://my-entertainment-3b33a.web.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
