//EJERCICIO 1
function numsAleat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numAl = Math.floor(Math.random()*100) + 1;
            resolve(numAl);
            console.log("El número aleatorio es:", numAl)
        }, 2000);
    }).then((num) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const numCuadrado = (num*num)
                    resolve(numCuadrado);
                    console.log("El cuadrado del número es: ", numCuadrado)
                }, 1000);
            });
        }).then((result) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const raiz = Math.sqrt(result);
                    resolve(raiz);
                    console.log("La raíz es: ", raiz)
                }, 1000);
            });
        });
}numsAleat().then(() => {
}).catch((error) => {
        console.error(error);
    });

//EJERCICIO 2

function multProm(urls) {
    const promesas = urls.map(url => {
        return fetch(url).then(response => response.json());
    });
    return Promise.all(promesas);
}
const urls = ['https://pokeapi.co/api/v2/pokemon/charmander', 'https://pokeapi.co/api/v2/pokemon/wartortle'];
multProm(urls).then(values => {
        console.log(values);
    })
    .catch(error => {
        console.error(error);
    });