import Axios from "./api";
import Kerinci from "./api-kerinci";

function App1() {
  return (
    <div className="atas2">
      <Axios />
      <p> The Best Food in The World. </p>
      <br />
      <a href="#"> Explore more {">"} </a>
      <img id="gambar" src="gambar/rendang.png" />
      <div class="kerinci">
        <br />
        <Kerinci />
        <p> Your New Vacation Wishlist.</p>
        <br />
        <a href="#"> Learn more {">"} </a>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Gunung_kerinci_-_Jambi.jpg/800px-Gunung_kerinci_-_Jambi.jpg" />
      </div>
    </div>
  );
}
export default App1;
