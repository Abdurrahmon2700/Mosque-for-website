import React from "react";
import Footercss from "../Footer/footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer_list container">
        <div className="w-25">
          <a className="d-flex justify-content-start text-light mb-3" href="#">
            <h1>Alkavsar.uz</h1>
          </a>
          <p className="footer_text">
            Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <ul className="d-flex justify-content-between list-unstyled social_list">
            <li className="social_item">
              <a href="#">
                <i className="social_icon bx bxl-facebook"></i>{" "}
              </a>
            </li>
            <li className="social_item">
              <a href="#">
                <i className="social_icon bx bxl-twitter"></i>
              </a>
            </li>
            <li className="social_item">
              <a href="#">
                <i className="social_icon bx bxl-instagram"></i>
              </a>
            </li>
            <li className="social_item">
              <a href="#">
                <i className="social_icon bx bxl-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <ul className="list-unstyled text-light">
          <li className="d-flex justify-content-start">
            <h4>Quick Links</h4>
          </li>
          <li className="d-flex justify-content-start">
            <span>__________</span>
          </li>
          <li className="d-flex justify-content-start">
            <a className="link_hooter" href="#">
              About Us
            </a>
          </li>
          <li className="d-flex justify-content-start">
            <a className="link_hooter" href="#">
              Courses
            </a>
          </li>
          <li className="d-flex justify-content-start">
            <a className="link_hooter" href="#">
              Teacher
            </a>
          </li>
          <li className="d-flex justify-content-start">
            <a className="link_hooter" href="#">
              Pricing{" "}
            </a>
          </li>
          <li className="d-flex justify-content-start">
            <a className="link_hooter" href="#">
              Contact
            </a>
          </li>
        </ul>
        <ul className="list-unstyled text-light">
          <li className="d-flex justify-content-start">
            <h4>Useful Links</h4>
          </li>
          <li className="d-flex justify-content-start">
            <span>__________</span>
          </li>
          <li className="d-flex justify-content-start">
            <a className="link_hooter" href="#">
              Privacy Policy
            </a>
          </li>
          <li className="d-flex justify-content-start">
            <a className="link_hooter" href="#">
              Terms and Conditions
            </a>
          </li>
          <li className="d-flex justify-content-start">
            <a className="link_hooter" href="#">
              Disclaimer
            </a>
          </li>
          <li className="d-flex justify-content-start">
            <a className="link_hooter" href="#">
              Support{" "}
            </a>
          </li>
          <li className="d-flex justify-content-start">
            <a className="link_hooter" href="#">
              FAQ
            </a>
          </li>
        </ul>
        <ul className="list-unstyled text-light w-25">
          <li className="d-flex justify-content-start">
            <h4>Stay Connected</h4>
          </li>
          <li className="d-flex justify-content-start">
            <span>__________</span>
          </li>
          <li className="d-flex justify-content-start">
            <a className="link_hooter" href="#">
              Jl. Sunset Road, 112290 Denpasar, Bali
            </a>
          </li>
          <li className="d-flex justify-content-start">
            <a className="link_hooter" href="#">
              qudrat@support.com
            </a>
          </li>
          <li className="d-flex justify-content-start">
            <a className="link_hooter" href="#">
              (+62) 81 414 257
            </a>
          </li>
          <li className="d-flex justify-content-start">
            <a className="link_hooter" href="#">
              021 223 224 19{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
