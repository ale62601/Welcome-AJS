import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FaFacebookSquare,FaPhoneAlt,FaInstagram,FaLinkedinIn} from 'react-icons/fa';

const FooterPage = () => {
    return (
        <MDBFooter className="FooterBase">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                   
                         <div classname="icons">
                         <ul>
                                <a class="Fa" target="_blank" href="https://www.facebook.com/ale.alejandro.18488" ><FaFacebookSquare /></a>
                                <a class="Fe" target="_blank" href="https:www.linkedin.com/in/alejandrojsantiagobonilla"><FaLinkedinIn/></a>
                                <a class="Fi" target="_blank" href="https://www.instagram.com/alejandro_j_s__/"><FaInstagram /></a>


                               <a class="Fo" id="Fo" href="/Contact" ><FaPhoneAlt /></a>
                        </ul>
 &copy; {new Date().getFullYear()} Copyright: <a href=""> Alejandro Santiago Bonilla </a>
                        </div>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;