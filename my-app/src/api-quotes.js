import React, { useState, useEffect } from "react";

function Harau() {
  const [content, ngeset] = useState(null); // Mulai dengan nilai null
  const [author, setauthor] = useState(null); // Mulai dengan nilai null

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        const { content, author } = data; // Deklarasikan content dan author langsung dari data
        ngeset(content);
        setauthor(author);
      })
      .catch((error) => console.error("Error:", error));
  }, []); // Menggunakan array kosong sebagai dependencies untuk memastikan useEffect hanya dipanggil sekali saat komponen dimuat

  // Menambahkan penanganan jika content atau author masih null
  if (content === null || author === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h6>{content}</h6>
      <h6>- {author} -</h6>
    </div>
  );
}

export default Harau;
