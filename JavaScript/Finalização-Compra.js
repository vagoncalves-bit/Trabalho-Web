let mapa = null;

function endereco(){  
    navigator.geolocation.getCurrentPosition(
        (posicao) => { 
        const latitude = posicao.coords.latitude;
        const longitude = posicao.coords.longitude;
        mostrar_mapa(latitude, longitude);
        }
    )
}

/** 
 * @param {number} latitude
 * @param {number} longitude
*/

function mostrar_mapa(latitude, longitude){    
    if (mapa !== null) {
        mapa.remove();
    }

    const zoom = 15;

    mapa = L.map('mapa').setView([latitude, longitude], zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(mapa);

    L.marker([latitude, longitude]).addTo(mapa);
        bindPopup('Sua Localização')
        .openPopup();
}