import React from "react";
import Menu from "./../home/nav";
import FooterPage from "./../Components/FooterPage";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./../style.css";
import {SiJava } from 'react-icons/si';

const Hobbie = () => (
  <div>
    <Menu />
    <br/>
    <br/><br/>
    
   <h1 class="home-title">
  <span>WELCOME</span>
  <span>TO PROJECTS</span>
</h1>

    {/* Project1 */}
<div class="jumbotron">
<h1>The Neutral Investment Intelligent </h1>
  <p>The Neutral Investment Intelligent is a web application, it will be used by the investment management professionals to research various companies</p>
  <p>Developer Tools:
    <Row>
      JAVA, VB.Net, XML, Restful, SQL, MySQL, Spring, Spring boot, Hibernate, CSS, JavaScript, React, GIT, Tomcat Apache, Kafka Apache, MongoDB, API, Visual Studio Code and IntelliJ IDEA.
    </Row>
  </p>
  <p>
  <a class= "link" target="_blank" href="https://n2sglobal.com/">Company Reference</a></p>
</div>
    {/* Project2 */}
<br/>
<div class="jumbotron container2">
<h1>Freelancing</h1>
  <p>I had multiples projects, based on doing web-sites and application. want to do business?
  <a class= "link" href="/Contact">"Let's talk"</a></p>
  <p>Developer Tools:
    <Row>
      React, Android studio, Vusial Studio Code, React, IntelliJ IDEA, Netbeans, JAVA, VB.Net, XML, Restful, SQL, MySQL, Spring, Spring boot, Hibernate, HTML, CSS, JavaScript, GIT, Tomcat Apache, Kafka Apache, MongoDB, API. Also as a bonus, I work and have the skill of Adobe Creative Suite (Photoshop, Ilustrate, Lihgtroom, After Effects Premium and Adobe XD).
    </Row>
  </p>
</div>
<p></p>
<p></p>

    {/******* Footer ******/}
  <FooterPage />
  </div>
  
);
export default Hobbie;