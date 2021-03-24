import React from "react";
import WOW from "wowjs";
import {Container, Row, Col } from "react-bootstrap";
import FooterPage from "./../Components/FooterPage";
import Menu from "./../home/nav";
import Program from "./../Components/Program";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import special from "./../special.css";

class Welcome extends React.Component {
  state = { modal: false };
  componentDidMount() {
    new WOW.WOW().init();
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <div>
<Menu />
        {/******* Jumbotron ******/}
        <Router>
          <Container>
            <Row>
              {/******* ICON1 ******/}
              <Col>
                {/* <button
                  class="button btn1 img-fluid wow fadeInDown"
                  onClick={this.toggle}>
                </button> */}

<div class="section full-height wow fadeInDown">
      	<input class="modal-btn" type="checkbox" id="modal-btn" name="modal-btn"/>
      	<label for="modal-btn"> <i class="uil uil-expand-arrows"></i>Click here</label> 		
      	<div class="modal">		
	      	<div class="modal-wrap">	
				<img src="./Image/MyFace.jpg" alt=""/>	
	      		<p>Hi! I'm Alejandro, Welcome to my Portfolio. If you want to get to know me, let's start <a class= "link4" href="/Program">here</a></p>
	      	</div>
      	</div>
	</div>
              </Col>
            </Row>
          </Container>
          <Switch>
            <Route path="/Components/Program">
              <Program />
            </Route>
          </Switch>
        </Router>
        {/******* Footer ******/}
        <FooterPage />
      </div>
    );
  }
}

export default Welcome;