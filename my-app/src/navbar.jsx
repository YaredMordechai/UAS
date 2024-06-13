export default function Navbar() {
  return (
    <div id="navbar">
      <nav className="navbar navbar-expand-lg" id="cc">
        <div id="kiri">
          <a className="navbar-brand" href="index.html">
            <img src="gambar/icon.png" className="ms-4" />
          </a>
          <h2>SumBar Explorer</h2>
        </div>
        <button
          className="navbar-toggler"
          id="tombol-nav"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className="css-yikrym"
          >
            <path
              fill="currentColor"
              d="M2 3h20v3H2zm0 8h20v3H2zm0 8h20v3H2z"
            ></path>
          </svg>
        </button>
        <div id="tomnav">
          <div
            className="collapse navbar-collapse mx-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link pe-3" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pe-3" href="Destination.html">
                  Destination
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pe-3" href="Kuliner.html">
                  Culinary
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="aboutus.html">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
