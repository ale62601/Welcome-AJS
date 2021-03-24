import React from "react";
import Menu from "./../home/nav";
import FooterPage from "./../Components/FooterPage";
import TypeWriterEffect from 'react-typewriter-effect';
import {Button, Jumbotron, Container, Row, Col } from "react-bootstrap";
import Bar from "./../Bar.css";

const Program = () => (
  <div>
    <Menu />
 <div>
 <br/><br/>
 {/* Name */}
 <div class="TextInfo">
 <TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display', fontWeight: 700, fontSize: '4em', }}
            startDelay={100}
            cursorColor="black"
            text="Alejandro J. Santiago Bonilla"
            typeSpeed={50}
            scrollArea={Program}
          />
          <img src="/Image/MyFace.jpg" alt="" />
{/* Background */}
<TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: 'red',
          fontWeight: 500,
          fontSize: '2em',
        }}
        startDelay={1000}
        cursorColor="#3F3D56"
        multiText={[
          'Punctual',
          'Fully Bilingual',
          'Organize',
          'Quick Learner',
          'Creative',
          'Responsible',
          'Punctual',
          'Fully Bilingual',
          'Organize',
          'Quick Learner',
          'Creative',
          'Responsible',
          'Punctual',
          'Fully Bilingual',
          'Organize',
          'Quick Learner',
          'Creative',
          'Responsible',
          'Punctual',
          'Fully Bilingual',
          'Organize',
          'Quick Learner',
          'Creative',
          'Responsible'
        ]}
        loop={true}
        nextTextDelay={3000}
        typeSpeed={30}
      />
{/* About */}

 <TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display' , fontSize: '2em' }}
            startDelay={2000}
            cursorColor="black"
            text="●Bachelor Degree on System Information●"
            typeSpeed={15}
            scrollArea={Program}
          />

<TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display' , fontSize: '2em' }}
            startDelay={2000}
            cursorColor="black"
            text="After working as a programmer since 2016, I have gather plenty of experience in Java, JavaScript, CSS, frameworks and system administration tools. During this time, I have expanded my range of knowledge and skills to make my work more efficient and accurate.
"
            typeSpeed={15}
            scrollArea={Program}
          />

{/* Circle about */}

<div class="wrapper">
<TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display', fontWeight: 700, fontSize: '4em', }}
            startDelay={100}
            cursorColor="black"
            text="Experience"
            typeSpeed={50}
            scrollArea={Program}
          />
<section class="Columns">
<div class="Col">
<div class="quote-wrapper">
  <blockquote class="text" cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/">
    <p>IT Specialist</p>
    <footer></footer>
  </blockquote>
</div>
</div>
<div class="Col">
<div class="quote-wrapper">
  <blockquote class="text2" cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/">
    <p>Web Developer</p>
    <footer></footer>
  </blockquote>
</div>
</div>
<div class="Col">
<div class="quote-wrapper">
  <blockquote class="text3" cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/">
    <p>Graphic Designer</p>
    <footer></footer>
  </blockquote>
</div>
</div>
<div class="Col">
<div class="quote-wrapper">
  <blockquote class="text4" cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/">
    <p>Program Developer</p>
    <footer></footer>
  </blockquote>
</div>
</div>

<div class="Col">
<div class="quote-wrapper">
  <blockquote class="text5" cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/">
    <p>IT Networking</p>
    <footer></footer>
  </blockquote>
</div>
</div>

</section>
</div>


{/* Skills */}
<br/><br/>
        <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: 'black',
          fontWeight: 500,
          fontSize: '4em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          '●Skills●',
        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={30}
      />
</div>
<div class="container">
     <ul>
            <li class="ng">Java</li>
            <li class="html">HTML</li> 
            <li class="css">CSS</li>
            <li class="js">JavaScript</li>
            <li class="sql">SQL</li>
            <li class="ps">Photoshop</li>
        </ul>  
        {/* <Button
            color="gray"
            href={require("../Img/IDE.pdf")}>
            Click here to see more skills
        </Button> */}


{/* Other */}

<div class="buttons">

<TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display', fontWeight: 700, fontSize: '4em', }}
            startDelay={100}
            cursorColor="black"
            text="Other skill with experience"
            typeSpeed={50}
            scrollArea={Program}
          />

    <button class="btn-hover color-1">MongoDB</button>
    <button class="btn-hover color-2">VB.Net</button>
    <button class="btn-hover color-3">XML</button>
    <button class="btn-hover color-4">Restful</button>
    <button class="btn-hover color-5">Spring</button>
    <button class="btn-hover color-6">SpringBoot</button>
    <button class="btn-hover color-7">Hibernate</button>
    <button class="btn-hover color-8">API</button>
    <button class="btn-hover color-9">Ilustrate</button>
    <button class="btn-hover color-10">After Effect</button>
    <button class="btn-hover color-11">Premium</button>
    <button class="btn-hover color-12">Tomcat Apache</button>
    <button class="btn-hover color-13">Kafka Apache</button>
    <button class="btn-hover color-14">MySQL</button>
    <button class="btn-hover color-15">React</button>
    <button class="btn-hover color-16">Adobe XD</button>
</div>
<Button
            color="gray"
            href={require("../Img/IDE.pdf")}>
            Click here to see Resume
        </Button>
</div>
<p></p>
<p></p>
</div>
    {/******* Footer ******/}
  <FooterPage />
  </div>
);
export default Program;
