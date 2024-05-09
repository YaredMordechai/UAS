function video() {
  return (
    <div className="container" >
      <div className="row">
        <div className="col-sm-6">
          <div className="video-container" data-aos="fade-right"
    data-aos-duration="2000"
    data-aos-delay="200">
            <iframe
              width="560"
              height="350"
              src="https://www.youtube.com/embed/XLeJnVArMhk?si=9_bBLepaWMKFrzKW"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="video-container" data-aos="fade-left"
    data-aos-duration="2000"
    data-aos-delay="200">
            <h1>Sumatera Barat</h1>
            <p>
              Sumatera Barat adalah sebuah provinsi di Indonesia yang terletak
              di Pulau Sumatra dengan ibu kota Padang. Provinsi Sumatera Barat
              terletak sepanjang pesisir barat Sumatra bagian tengah, dataran
              tinggi Bukit Barisan di sebelah timur, dan sejumlah pulau di lepas
              pantainya seperti Kepulauan Mentawai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default video;
