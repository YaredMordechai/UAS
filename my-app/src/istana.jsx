import React, { useState, useEffect } from 'react';

function istana() {
    const [mountKerinciTitle, setMountKerinciTitle] = useState('');

    useEffect(() => {
        fetch('https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=Istana_Basa_Pagaruyung')
        .then(response => response.json())
        .then(data => {
            const mountKerinciInfo = data.query.pages['9807176'];
            setMountKerinciTitle(mountKerinciInfo.title);
        })
        .catch(error => console.error('Error:', error));
    }, []); // Menggunakan array kosong sebagai dependencies untuk memastikan useEffect hanya dipanggil sekali saat komponen dimuat

    return (
        <p className="card__title">{mountKerinciTitle}</p>
    );
}

export default istana;
