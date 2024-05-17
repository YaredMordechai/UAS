import React, { useState, useEffect } from "react";

function Harau() {
  const [setup, ngeset] = useState(null); // Mulai dengan nilai null
  const [punchline, setpunchline] = useState(null); // Mulai dengan nilai null

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        const { setup, punchline } = data; // Deklarasikan setup dan punchline langsung dari data
        ngeset(setup);
        setpunchline(punchline);
      })
      .catch((error) => console.error("Error:", error));
  }, []); // Menggunakan array kosong sebagai dependencies untuk memastikan useEffect hanya dipanggil sekali saat komponen dimuat

  // Menambahkan penanganan jika setup atau punchline masih null
  if (setup === null || punchline === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p id="pp">{setup}</p>
      <p id="pp">{punchline}</p>
    </div>
  );
}

export default Harau;
