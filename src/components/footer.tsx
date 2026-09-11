import Footerimg from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="bg-[#F1F5F9]">
      <div className="container pt-5 mt-15 mx-auto h-75 flex flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <img src={Footerimg} alt="footerimg" />
            <p className="text-gray-400">
              Curated tools, technologies, and resources for developers building
              <br></br>modern software.
            </p>
            <div className="flex gap-3">
              <a href="#">GitHub</a>
              <a href="#">Twiter</a>
              <a href="#">Linkedin</a>
            </div>
          </div>
          <div>
            <h3>PRODUCT</h3>
            <ul className="text-gray-400">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Technologies</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>COMPANY</h3>
            <ul className="text-gray-400">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>LEGAL</h3>
            <ul className="text-gray-400">
              <li>
                <a href="">PrivacyPolicy</a>
              </li>
              <li>
                <a href="">Terms of Sercice</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-gray-200 mt-15"></hr>
        <div className="flex justify-between mb-10">
          <p className="text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <p className="text-gray-400">Privacy Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
