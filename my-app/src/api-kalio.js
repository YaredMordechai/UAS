import React, { useState, useEffect } from 'react';

function Kalio() {
    const [mountKerinciTitle, setMountKerinciTitle] = useState('');

    useEffect(() => {
        fetch('https://id.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=%27Kalio%27%27')
        .then(response => response.json())
        .then(data => {
            const mountKerinciInfo = data.query.pages['1041096'];
            setMountKerinciTitle(mountKerinciInfo.title);
        })
        .catch(error => console.error('Error:', error));
    }, []); // Menggunakan array kosong sebagai dependencies untuk memastikan useEffect hanya dipanggil sekali saat komponen dimuat

    return (
        <h1>{mountKerinciTitle}</h1>
    );
}

export default Kalio;
