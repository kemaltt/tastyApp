import "./../assets/css/Footer.scss";


const Footer = () => {
  return (
    <section className="footerContainer">
      <a target={'_blank'} rel="noreferrer" href="https://www.instagram.com/">
        <i className="lab la-instagram"></i>
      </a>
      <a target={'_blank'} rel="noreferrer" href="https://www.youtube.com/">
        <i className="lab la-youtube"></i>
      </a>
      <a target={'_blank'} rel="noreferrer" href="https://de-de.facebook.com/">
        <i className="lab la-facebook-f"></i>
      </a>
    </section >
  );
};
export default Footer;
