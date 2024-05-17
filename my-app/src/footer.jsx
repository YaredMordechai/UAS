import Tangal from "./api-tanggal";
import Cuaca from "./api-cuaca";

function futer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>Sumatera Barat</h6>
              <p className="text-justify">
                Sumatera Barat, sebuah provinsi yang berada di ujung bawah pulau
                Sumatera yang kaya akan keindahan alam, kekayaan budaya, cita
                rasa kuliner, dan juga keramahan penduduk yang menakjubkan yang
                menunggu untuk dijelajahi. Temukan pesonanya bersama kami.
              </p>
            </div>

            <div className="col-xs-6 col-md-3"></div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="Destination.html">Destination</a>
                </li>
                <li>
                  <a href="Kuliner.html">Culinary</a>
                </li>
                <li>
                  <a href="aboutus.html">About Us</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2024 All Rights Reserved by
                <a href="index.html">SumBar Explorer</a>.
                <Tangal />
                <Cuaca />
                <p id="kondisi"></p>
                <p id="suhu"></p>
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="https://facebook.com">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="https://twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="https://instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="https://linkedin.com">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default futer;
