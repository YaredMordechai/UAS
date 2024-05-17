export default function caro() {
  return (
    <div id="carousel">
      <h1 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="200">
        Take a Look
      </h1>
      <div className="card-container">
        <div
          className="card"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg>
          <img src="gambar/gb5.jpg" width="423px" height="250px" />
          <div className="card__content">
            <p className="card__title">Gajebo</p>
            <hr className="garis" />
            <p className="card__description">
              Gajebo, adalah hidangan daging sapi dengan kuah asam pedas yang
              kaya rempah, biasanya menggunakan potongan daging dengan sedikit
              lemak.
            </p>
            <p className="card__price">Rp 35.000 - Rp 60.000/porsi</p>
          </div>
        </div>

        <div
          className="card"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg>
          <img src="gambar/satePadang.jpg" width="440rpx" height="240px" />
          <div className="card__content">
            <p className="card__title">Nasi Sala</p>
            <hr className="garis" />
            <p className="card__description">
              Nasi sala adalah nasi yang disajikan dengan ikan sala, yaitu ikan
              yang dibalut adonan tepung berempah kemudian digoreng.
            </p>
            <p className="card__price">Rp 20.000 - Rp 35.000/porsi</p>
          </div>
        </div>

        <div
          className="card"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg>
          <img src="gambar/gb7.jpg" width="380px" height="280px" />
          <div className="card__content">
            <p className="card__title">Nasi Sala</p>
            <hr className="garis" />
            <p className="card__description">
              Nasi sala adalah nasi yang disajikan dengan ikan sala, yaitu ikan
              yang dibalut adonan tepung berempah kemudian digoreng.
            </p>
            <p className="card__price">Rp 20.000 - Rp 35.000/porsi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
