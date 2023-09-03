import { FooterContainer } from "./footer.styles";

export default function Footer() {
  return (
    <FooterContainer>
        <div className="upper-section">
          <img src="/src/assets/footer-logo.png" alt="Angie Agency" />
          <ul className="links">
            <li className="link hover:underline connect"><a href="#" target="blank">CONNECT</a></li>
            <li className="link hover:underline"><a href="#" target="blank">Linkedin</a></li>
            <li className="link hover:underline"><a href="#" target="blank">Facebook</a></li>
            <li className="link hover:underline"><a href="#" target="blank">Twitter (X)</a></li>
            <li className="link hover:underline"><a href="#" target="blank">Instagram</a></li>
          </ul>
        </div>
        <div className="bottom-section">
          <span>Copyright 2009-2023 © Angie Agency®</span>
          <a className="hover:underline" href="mailto:info@angieagency.com">info@angieagency.com</a>
        </div>
    </FooterContainer>
  )
}
