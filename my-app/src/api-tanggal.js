import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDateTime = async () => {
      try {
        const response = await fetch(
          `https://api.timezonedb.com/v2.1/get-time-zone?key=YCDDDD2M7THV&format=json&by=zone&zone=Asia/Jakarta`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDateTime(data.formatted);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDateTime();
  }, []);

  return <div>{error ? <p>Error: {error}</p> : <p>{dateTime}</p>}</div>;
};

export default DateTime;
