function calculateAge() {
    let age = document.getElementById("age").value;
    let species = document.getElementById("species").value;
    let equivalentAge = (age * species) / 80;

    document.getElementById("result").innerHTML = 
        `Tu edad en el mundo de Star Wars sería: ${equivalentAge.toFixed(2)} años.`;
}

function updateImage() {
    let species = document.getElementById("species").value;
    let image = document.getElementById("species-image");

    switch(species) {
        case '80':
            image.src = 'resources/img/human.jpg';
            image.alt = 'Humano';
            break;
        case '400':
            image.src = 'resources/img/wookie.jpg';
            image.alt = 'Wookiee';
            break;
        case '900':
            image.src = 'resources/img/yoda.jpg';
            image.alt = 'Especie de Yoda';
            break;
        case '85':
            image.src = 'resources/img/twilek.png';
            image.alt = 'Twi\'lek';
            break;
        case '60':
            image.src = 'resources/img/ewok.jpg';
            image.alt = 'Ewok';
            break;
        default:
            image.src = '';
            image.alt = 'Imagen de especie';
    }
}
