import Apple from "../../assets/imgs/newLayout/apple-logo-grey-1.png";
import Windows from "../../assets/imgs/newLayout/windows-1.png";
import FooterGlow from "../../assets/imgs/newLayout/footerglow.png";

function Footer() {
  return (
    <footer className="new-footer">
      <h2>
        Stellar. <span>3.0</span>
      </h2>
      <p>Streamlined reselling backed by world class automation.</p>
      <div className="new-footer-bottom">
        <div className="new-footer-bottom-left">
          <img src={Apple} />
          <img src={Windows} />
        </div>
        <div className="new-footer-bottom-right">
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Dashboard</p>
        </div>
      </div>
      <img src={FooterGlow} alt="" className="new-footer-glow" />
    </footer>
  );
}

export default Footer;
