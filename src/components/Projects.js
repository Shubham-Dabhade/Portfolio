  import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projImg1 from "../assets/img/Screenshot (156).png";
import projImg2 from "../assets/img/Screenshot (157).png";
import projImg3 from "../assets/img/Screenshot (158).png";
import projImg4 from "../assets/img/Screenshot (161).png";
import projImg5 from "../assets/img/openD.png";
import projImg6 from "../assets/img/Screenshot (163).png";

export const Projects = () => {

  const projects = [
    {
      title: "NetFlix Clone",
      description: "Netflix clone with backend functionality",
      imgUrl: projImg1 ,
      link:"https://netflix-ra.netlify.app"
    },
    {
      title: "E-Commerce App",
      description: "A shopping app for buying clothes and more",
      imgUrl: projImg2,
      link:"https://e-commerce-ra.netlify.app"
    },
    {
      title: "Registration App",
      description: "Registration app to book hotels for stay",
      imgUrl: projImg3,
      link:"https://booking-ra.netlify.app"
    },
    {
      title: "Social Media App",
      description: "Social Media app for connecting with your friends",
      imgUrl: projImg4,
      link:"https://github.com/Shubham-Dabhade/social-media-app"
    },
    {
      title: "NFT App",
      description: "To buy and sell nft using local ICP functionality",
      imgUrl: projImg5,
      link:"https://github.com/Shubham-Dabhade/openD"
    },
    {
      title: "Netflix Admin Panel",
      description: "Admin panel to manage the users and products",
      imgUrl: projImg6,
      link:"https://github.com/Shubham-Dabhade/netflix-admin"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>From Web Components to implementation of API's and ICP check out my latest web projects, for more visit my github page.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" style={{borderRadius:"20px"}}>Tab 1</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
