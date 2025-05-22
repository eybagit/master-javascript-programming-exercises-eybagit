const getFirstElementOfProperty = (objeto, key) => objeto?.[key]?.[0];

let persona = {
    edad: '28',
    nombre: 'Juanita',
    ciudad: 'Indonesia'
}

console.log(getFirstElementOfProperty(persona, 'edad'));
