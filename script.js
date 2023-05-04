var xhr = new XMLHttpRequest();
var resultado = null;

xhr.open('GET', 'https://restcountries.com/v3.1/name/brazil');
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        resultado = JSON.parse(xhr.response);

        console.log(resultado);
        console.log('Pais: ', resultado[0].name.nativeName.por.official);
        console.log('Capital: ', resultado[0].capital[0]);
        console.log('Continente: ', resultado[0].continents[0]);

        var bandeira = resultado[0].flags;

        const img = document.querySelector('.bandeira');
        img.src = bandeira.png;
        img.alt = bandeira.alt;

        document.appendChild(img);
    }
}