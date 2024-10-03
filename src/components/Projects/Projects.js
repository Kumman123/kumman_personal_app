import React from "react";
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
              title="Sorting-visualizer"
              description="Created a dynamic web app using JavaScript, React.js, HTML, and CSS, showcasing various sorting algorithms., Incorporated user-friendly features, including controls for adjusting processing speed and array size..."
              ghLink="https://github.com/Kumman123/SortingVisulizer"
              demoLink="https://sort-visulize.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="EEG -singnal based Grashp and lift by Robotic Arm"
              description="Predicted Grasp and Lifting events using EEG signals through advanced machine learning techniques , Developed predictive models using Convolutional Neural Networks (CNN), Long Short-Term Memory (LSTM)
              networks, and Deep Reinforcement Learning (DRL)
              "
              ghLink="https://github.com/Kumman123/EEG-SINAL"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Multiclass-Image-Classification"
              description="Mutliclass image classification by using AlexNet ,VGGnet ,Resnet convolutional neural networks , implemented models in python on CIBR-10 datset."
              ghLink="https://github.com/Kumman123/Multiclass-Image-Classificatio"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Movie-finder"
              description="Movie-finder web app based on omdb API , where we can fetch any MOVIE , with its release date , IMDB rating , Platform."
              ghLink="https://github.com/Kumman123/movie-finder"
              
            />
          </Col>



  

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="MY-PORTFOLIO"
              description="Created personal responsive portfolio webstite using HTML , CSS , JavaScript , showcase my projects and Exprience , Education ,  ."
              ghLink="https://github.com/Kumman123/kdm"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Amazon Frontpage"
              description="Amazon frontpage web page using HTML , CSS , JavaScript, "
              ghLink="https://github.com/Kumman123/AMAZON-CLONE/tree/main/kumman'amzon%20clone"
              //       <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
