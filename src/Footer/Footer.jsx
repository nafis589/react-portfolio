import "./Footer.css";
import { MdAttachEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer">
        <div className="footer-content">
          <h1>CONTACT</h1>
          <p>N’hésitez pas à me contacter!</p>
        </div>
        <div className="footer-link">
          <ul>
            <li className="footer-link-list">
              <a href="#" className="list-l">
                <MdAttachEmail style={{ fontSize: "2rem" }} />
                <div className="paragraphe">princenafistoure@gmail.com</div>
              </a>
            </li>
            <li className="footer-link-list">
              <a href="#" className="list-l">
                <FaLinkedinIn style={{ fontSize: "2rem" }} />
                <div className="paragraphe">linkedin.com</div>
              </a>
            </li>
            <li className="footer-link-list">
              <a href="#" className="list-l">
                <FaGithub style={{ fontSize: "2rem" }} />
                <div className="paragraphe">github.com</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
