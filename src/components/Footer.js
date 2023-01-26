import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const Footer = () => {
  return (
    <Router>
    <footer className="footer">
      <Container>
        <div className="align-items-center">
          <div className="nameL">
            Shubham
          </div>
          <div className="contents">
            <ul>
            <HashLink to="#home" style={{textDecoration:"none"}}>
              <li>About</li>
            </HashLink>
            <HashLink to="#projects" style={{textDecoration:"none"}}>
              <li>Projects</li>
            </HashLink>
              <HashLink to="#skills" style={{textDecoration:"none"}}>
              <li>Skills</li>
              </HashLink>
            </ul>
          </div>
          
          <div className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shubham-dabhade-019a06221/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Shubham-Dabhade" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/_.shubhamdabhade._/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023.</p>
          </div>
        </div>
      </Container>
    </footer>
    </Router>
  )
}
