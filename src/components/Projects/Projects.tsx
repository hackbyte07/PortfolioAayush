import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gf from "../../Assets/Projects/gf.png";
import gfrn from "../../Assets/Projects/gfrn.png";


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
              imgPath={gf}
              isBlog={false}
              title="GLUTEN FREE JIO (React Native)"
              description="Developed proficient cross-platform application tailored for an NGO, ensuring compatibility across both smartphones and tablets and used push notifications to keep users updated even when the appis not in use also implement a local caching mechanism for improved performance."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gfrn}
              isBlog={false}
              title="Gluten Free Jio (React)"
              description="Gluten Free Jio is a comprehensive online resource catering to individuals following a gluten-free lifestyle. With a focus on inclusivity and accessibility, the platform offers a wealth of information, including articles, recipes, and tips for navigating the challenges of gluten-free living."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
