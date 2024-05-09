import React, { useState, useEffect } from "react";

function Gadang() {
  const [mountKerinciTitle, setMountKerinciTitle] = useState("");

  useEffect(() => {
    fetch(
      "https://id.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=%27Jam_Gadang%27%27"
    )
      .then((response) => response.json())
      .then((data) => {
        const mountKerinciInfo = data.query.pages["29406"];
        setMountKerinciTitle(mountKerinciInfo.title);
      })
      .catch((error) => console.error("Error:", error));
  }, []); // Menggunakan array kosong sebagai dependencies untuk memastikan useEffect hanya dipanggil sekali saat komponen dimuat

  return <h1>{mountKerinciTitle}</h1>;
}

export default Gadang;
